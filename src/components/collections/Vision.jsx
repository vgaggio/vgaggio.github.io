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

  return (
    <section id="vision" className={isMobile ? "pt-20" : "pt-36"}>
      <Container aria-label="Vision Section">
        <div className="mx-auto max-w-md">
          <div className="flex flex-wrap justify-center items-start">
            <Title
              title={t("Visión")}
              className="text-3xl text-center"
            />
            <LineBackground color1="#CAF1B8" color2="#98C9F0" width={500} height={25} className="my-4"/> {/* Línea como separación */}
            <div className={"text-lg text-center"}>
              <p >{t("Vision de la Empresa")}</p>
            </div>
            <LineBackground color1="#CAF1B8" color2="#98C9F0" width={500} height={25} className="my-5"/> {/* Línea como separación */}
          </div>
        </div>
        <Slider {...settings} className="mx-auto max-w-md text-center">
          {DataVision.map((item, index) => (
            <div key={index} className="text-lg text-center ">
              <span style={{ padding: '20px'}}>{t(item.name)}</span>
            </div>
          ))}
        </Slider>
      </Container>
    </section>
  );
};

export default Vision;





