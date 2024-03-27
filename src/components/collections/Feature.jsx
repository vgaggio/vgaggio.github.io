"use client";
import React, { useState, useEffect } from "react";
import Container from "./Container";
import Title from "./Title";
import DesktopFeature, { FeatureMobile } from "./DesktopFeature";
import { useTranslation } from "next-i18next";

const Feature = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 500;

  useEffect(() => {
    const handleScroll = () => {
      const threshold = isMobile ? 1650 : 1100;
      if (window.scrollY > threshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Verificar si estamos en el lado del cliente antes de agregar el event listener
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [isMobile]);

  return (
    <section
      id="features"
      aria-label="Features to manage your communication intelligently"
      className={`bg-gray-900 ${isMobile ? "py-20" : "py-40"}`}
    >
      <Container>
        <div className="max-w-6xl mx-auto lg:mx-0">
          <Title
            title={t("featuresTitleCol")}
            className={`text-3xl text-white text-center`}
          />

          {/*<p className="mt-2 text-lg text-gray-400">
            {t("featuresSubtitleCol")}
          </p>*/}
        </div>
      </Container>
      {/* Desktop View */}
      <div className="hidden md:mt-20 md:block max-w-screen-xl mx-auto">
        <DesktopFeature />
      </div>
      {/* Mobile View */}
      <div className="mt-16 md:hidden">
        <FeatureMobile />
      </div>
    </section>
  );
};

export default Feature;
