"use client";

import React, { useState, useEffect, useRef } from "react";
import Container from "./Container";
import Title from "./Title";
import { modelDataCol } from "../../constants";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import Lottie from 'lottie-react';

const Model = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useRef(null);
  const [isNotMobile, setIsNotMobile] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const setResponsiveness = () => {
      setIsNotMobile(window.innerWidth > 500);
    };

    const handleScroll = () => {
      const threshold = isNotMobile ? 300 : 610;
      setIsVisible(window.scrollY > threshold);
    };

    setResponsiveness();
    window.addEventListener("resize", setResponsiveness);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", setResponsiveness);
      window.removeEventListener("scroll", handleScroll);
    };

  }, [isNotMobile]);

  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.clientHeight);
    }
  }, []);

  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch('/animation2.json')
      .then(response => response.json())
      .then(data => setAnimationData(data));
  }, []);


  return (
    <section id="model" className={`py-${isNotMobile ? '40' : '10'}`}>
      <div ref={headerRef}>
        {/* Aquí va el contenido del encabezado */}
      </div>
      <div className={`text-center ${isVisible ? "opacity-100 ease-in-out" : "opacity-0"}`}>
      <Container aria-label="Features for building a portfolio" className="flex flex-row items-center justify-center">
      {/* Imagen a la izquierda */}
      <div className="flex-1">
      {animationData && (
          <div className="flex sm:ml-20 ml-0">
        <Lottie animationData={animationData} style={{ width: 500, height: 500 }} />
        </div>

      )}      </div>

      {/* Contenido a la derecha */}
      <div className="flex-1 mx-auto max-w-4xl text-center">
        <Title
          title={t("modelTitleCol")} // Asegúrate de tener definida la función `t` para traducción si es necesario
          className="text-3xl transition-opacity duration-4000 text-center mb-4"
        />

        <p>
          Somos una consultora especializada en el reclutamiento y selección de personas con sede en Córdoba Capital, Argentina. Nos consideramos socios estratégicos de nuestros clientes y trabajamos para brindarles un servicio de calidad y compromiso, basado en nuestra amplia experiencia en el campo.
        </p>
        <br/>
        <p>
          Nuestro negocio abarca una amplia gama de servicios para satisfacer las necesidades de nuestros clientes. Nos encargamos de definir perfiles de puesto, buscar y seleccionar candidatos, evaluar competencias y habilidades, verificar referencias, y coordinar entrevistas y evaluaciones.
        </p>
        <br/>
        <p>
          Atendemos a diversas industrias y sectores, desde servicios financieros y tecnología hasta la industria manufacturera y el sector de la salud. Reconocemos la importancia de contar con el mejor talento en el equipo de una empresa y de gestionar de manera efectiva los recursos humanos. Por eso, nos esforzamos por mantenernos actualizados en las últimas tendencias del mercado laboral y las mejores prácticas en reclutamiento y selección.
        </p>
        <br/>
        <p>
          En Team, trabajamos con dedicación para ayudar a las empresas a encontrar los candidatos ideales y establecer equipos exitosos. Nos enorgullece ofrecer servicios integrales y personalizados para cumplir con las expectativas de nuestros clientes y contribuir a su éxito en la atracción y retención del talento.
        </p>
      </div>

    </Container>
    </div>

    </section>
  );
};

export default Model;


/*
<section>
  <Container
    id="model"
    aria-label="Features for building a portfolio"
    className="py-20 sm:py-32"
  >
    <div className=" mx-auto max-w-2xl sm:text-center">
      <Title
        title={t('modelTitleCol')}
        className="text-2xl"
      />
      <p className="mt-2 text-lg text-gray-600">
      {t('modelSubtitleCol')}
      </p>
    </div>
    <ul
      role="list"
      className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-2"
    >
      {modelDataCol.map((item) => (
        <li
          key={t(item.name)}
          className="rounded-2xl border border-gray-200 hover:border-gray-300 p-8 group hover:bg-gray-100 duration-300 cursor-pointer"
        >
          {/* <item.icon className="h-8 w-8" /> *//*}
<Image className="h-16 w-16" src={item.icon} alt="" height={10} width={10}/>
<h3 className="mt-6 font-semibold text-gray-900 group-hover:text-black duration-300">
{t(item.name)}
</h3>
<p className="mt-2 text-gray-700 group-hover:text-black duration-300">
{t(item.description)}
</p>
</li>
))}
</ul>
</Container>
</section>
);
};*/