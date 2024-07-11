"use client";
import React, { useState, useEffect } from "react";
import Container from "./Container";
import Title from "./Title";
import LineBackground from "./LineBackground"; // Importa el nuevo componente

import { useTranslation } from "react-i18next";
import { DataVision } from "../../constants";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Vision = () => {
  const { t } = useTranslation();

  //const isMobile = typeof window !== "undefined" && window.innerWidth < 500;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 500);
    };

    // Ejecutar handleResize al cargar y al redimensionar la ventana
    handleResize();
    window.addEventListener("resize", handleResize);

    // Eliminar el event listener al desmontar el componente
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    variableWidth: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    swipeToSlide: true,
    useCSS: true,
  };

  const texts = [" Nos esforzamos por alcanzar los más altos estándares de calidad en todos nuestros servicios.  ",
    "Estamos comprometidos con el éxito de nuestros clientes y trabajamos arduamente para ayudarles a alcanzar sus metas.  ",
    "Mantenemos la honestidad y la transparencia en todas nuestras interacciones y decisiones.  ",
    "Fomentamos un ambiente de trabajo en equipo, donde cada miembro del equipo aporta su experiencia y conocimientos para lograr resultados óptimos.  ",
    "Estamos constantemente buscando nuevas formas de mejorar y adaptarnos a los cambios del mercado, utilizando tecnologías y métodos vanguardistas."

  ]; // Aquí define los textos que quieres que se vayan cambiando
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % texts.length);
    }, 7000); // Cambia el texto cada 7 segundos

    return () => clearInterval(interval);
  }, []); // Este efecto se ejecuta solo una vez al montar el componente


  return (
    <section id="vision" className={isMobile ? "py-20" : "py-40"}>
      <Container aria-label="Vision Section">
        <div className="mx-auto max-w-md">
          <div className="flex flex-wrap justify-center items-start">
            <Title
              title={t("Valores")}
              className="text-4xl text-center"
            />
            <LineBackground color1="#CAF1B8" color2="#98C9F0" width={500} height={25} className="my-4" /> {/* Línea como separación */}
            {texts.map((text, idx) => (
              <p key={idx} className={`text-center transition-opacity duration-2000 ${idx === index ? 'opacity-100' : 'opacity-0 absolute top-0 left-0'}`}>
                {t(text)}
              </p>
            ))}
            <LineBackground color1="#CAF1B8" color2="#98C9F0" width={500} height={25} className="my-5" /> {/* Línea como separación */}

          </div>
        </div>
        <Slider {...settings} className="mx-auto max-w-md text-center">
          {DataVision.map((item, index) => (
            <div key={index} className="text-lg text-center ">
              <span style={{ padding: '20px' }}>{t(item.name)}</span>
            </div>
          ))}
        </Slider>
      </Container>
    </section>
  );
};

export default Vision;





