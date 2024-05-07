"use client";
import React from "react";
import Container from "./Container";
import Title from "./Title";
import { useTranslation } from "react-i18next";
import { DataVision } from "../../constants";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Vision = () => {
  const { t } = useTranslation();
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 500;
  const settings = {
    dots: false,
    infinite: true, // Desplazamiento infinito
    speed: 5000, // Velocidad de desplazamiento (en milisegundos)
    slidesToShow: 1, // Mostrar una palabra a la vez
    slidesToScroll: 1, // Desplazarse una palabra a la vez
    autoplay: true, // Reproducción automática
    autoplaySpeed: 0, // Velocidad de reproducción automática (en milisegundos)
    cssEase: 'linear', // Tipo de animación
    variableWidth: true, // Ancho variable para que cada palabra sea su propio slide
    pauseOnHover: false, // No pausar al pasar el mouse
    pauseOnFocus: false, // No pausar al enfocar
    swipeToSlide: true, // Permite deslizar para cambiar de slide
    useCSS: true, // Desactiva CSS para mejorar la velocidad en la transición  
  };

  const clonedDataVision = [...DataVision, ...DataVision, ...DataVision];

  return (
    <section id="vision" className={isMobile ? "py-20" : "py-32"}>
      <Container aria-label="Vision Section">
        <div className="mx-auto max-w-6xl sm:text-center">
          <div className="flex flex-wrap justify-center items-start">
            <Title
              title={t("Visión")}
              className="text-6xl font-bold font-semibold"
            />
            <div className="text-center">
              <p className="pt-20 px-6 text-xl">{t("Vision de la Empresa")}</p>
            </div>
          </div>
        </div>
        <Slider {...settings} className="mx-auto max-w-3xl sm:text-center pt-20 pb-20">
          {DataVision.map((item, index) => (
            <div key={index} className="word-slide text-2xl">
              <span style={{ marginRight: "20px",
                    padding: '25px',
               }}>{t(item.name)}</span>
            </div>
          ))}
        </Slider>
      </Container>
    </section>
  );
};

export default Vision;



