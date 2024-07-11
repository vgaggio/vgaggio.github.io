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


  const email = "2113503@ucc.edu.ar";
  const subject = "Envió de CV para Teams";
  const body = `Estimado/a,

Me dirijo a usted para expresar mi interés en el puesto de [Nombre del Puesto] en [Nombre de la Empresa]. Adjunto a este correo encontrará mi currículum vitae, en el cual podrá encontrar información detallada sobre mi formación académica y experiencia laboral.

Estoy seguro/a de que mi perfil cumple con los requisitos del puesto y que puedo aportar valor a su equipo. Agradezco su tiempo y consideración, y quedo a la espera de una respuesta favorable.

Atentamente,
[Tu Nombre]
[Tu Número de Teléfono]
[Tu Dirección de Email]`;

  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;


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
                  scale: hovered ? 1.05 : 1, // Escala aumenta al hacer hover
                }}
                transition={{
                  duration: 0.2, // Duración de la animación
                  ease: "easeInOut", // Tipo de transición
                }}
                onHoverStart={() => setHovered(true)}
                onHoverEnd={() => setHovered(false)}
              >
                <Button
                  href={mailtoLink}
                  variant="outline"
                  className={`py-2 px-4 bg-gray-500 text-white font-bold rounded transition duration-200 ${hovered ? 'hover:shadow-lg hover:bg-gray-600' : ''}`}
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
