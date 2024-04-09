"use client";
import React, { useState, useEffect } from "react";
import Container from "./Container";
import Title from "./Title";
import { howDataCol } from "../../constants";
import { useTranslation } from "react-i18next";
import Image from "next/image";

const HowItWorks = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 500;

  useEffect(() => {
    const handleScroll = () => {
      const threshold = isMobile ? 2200 : 2650;
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
    <section id="howitworks" className={isMobile ? "py-20" : "py-32"}>
      <Container aria-label="Features for building a portfolio">
        <div className=" mx-auto max-w-2xl sm:text-center">
          <Title
            title={t("howItWorksTitleCol")}
            className={`text-4xl 3xl:text-base transition-opacity duration-8000 text-center
             ${isVisible ? "opacity-100" : "opacity-0"}`}
          />
          <p
            className={`mt-2 text-lg text-gray-600 transition-opacity duration-10000 text-center ${
              isVisible ? "opacity-100" : "opacity-0 text-center"
            }`}
          >
            {t("howItWorksSubtitleCol")}
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 md:gap-y-10 lg:max-w-none"
        >
          {howDataCol.map((item, index) => (
            <li
            key={t(item.name)}
            className={`rounded-2xl border border-gray-200 p-8 group flex items-center transition-opacity duration-4000 
            ${isVisible ? "opacity-100 transition-opacity duration-2000" : "opacity-0"} 
            hover:bg-gray-100 hover:bg-opacity-50 hover:border-gray-300 cursor-pointer`}
            style={{
              transitionDelay: `${isVisible ? (isMobile ? index * 800 : index * 530) : 0}ms`,
            }}
          >
              <Image
                className="h-8 w-8 mr-10 sm:h-10 sm:w-10"
                src={item.icon}
                alt=""
                height={10}
                width={10}
              />

              <h3 className=" font-semibold text-gray-900 group-hover:text-black duration-300">
                {t(item.name)}
              </h3>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default HowItWorks;
