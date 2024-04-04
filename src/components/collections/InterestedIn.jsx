"use client";

import React, { useState, useEffect } from "react";
import Container from "./Container";
import Title from "./Title";
import { useTranslation } from "react-i18next";
import Button from "./Button";
import { motion } from "framer-motion";

const InterestedIn = () => {
  const { t } = useTranslation();
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 500;
  const [animationState, setAnimationState] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!hovered) {
        setAnimationState((prevAnimationState) => !prevAnimationState);
      }
    }, 6000);

    return () => clearInterval(interval);
  }, [hovered]);

  return (
    <section className={isMobile ? "py-10" : "py-20"}>
      <Container
        id="interestedin"
        aria-label="Features for building a portfolio"
      >
        <div>
          <div className="mx-auto max-w-l text-center">
            <Title title={t("interestedInTitleCol")} className="text-2xl" />
            <p className="mt-2 text-lg text-gray-600 text-center">
              {t("interestedInSubtitleCol")}
            </p>
            {/* Asegúrate de que el botón esté visible y centrado */}
            <div className="mt-4 flex justify-center">
              <motion.div
                animate={{
                  y: animationState ? 0 : 0,
                  rotate: animationState ? [0, 10, -10, 10, -10, 10, -10, 10, -10, 10, 0] : 0,
                  scale: hovered ? 1.06 : 1, // Escala aumenta al hacer hover
                }}
                transition={{
                  duration: 1, // Duración de la animación
                  ease: "easeInOut", // Tipo de transición
                }}
                onHoverStart={() => setHovered(true)}
                onHoverEnd={() => setHovered(false)}
              >
                <Button
                  href="https://bircle.ai/customersupport"
                  variant="outline"
                  className={`py-2 px-4 bg-gray-500 text-white font-bold rounded transition duration-300 ${hovered ? 'hover:shadow-lg hover:bg-gray-600' : ''}`}
                  target="_blank"
                >
                  {t("interestedInButtonTitleCol")}
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default InterestedIn;
