/*"use client";
import React from "react";
import Container from "./Container";
import Title from "./Title";
import CircleBackground from "./CircleBackground";

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
    <section id="vision" className="relative overflow-hidden py-20 py-40">
      <div className="absolute left-20 top-1/2 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
        <CircleBackground color="#005699" className="animate-spin-slower" />
      </div>
      <Container aria-label="Vision Section">
        <div className="mx-auto max-w-md sm:text-center mb-8">
          <div className="flex flex-wrap justify-center items-start">
            <Title
              title={t("Visión")}
              className="text-3xl sm:text-4xl text-center"
            />
            <div className="text-center mt-10">
              <p className="text-lg">{t("Vision de la Empresa")}</p>
            </div>
          </div>
        </div>
        <Slider {...settings} className="mx-auto max-w-lg sm:text-center">
          {DataVision.map((item, index) => (
            <div key={index} className="mt-4 text-lg text-center">
              <span style={{ padding: '25px' }}>{t(item.name)}</span>
            </div>
          ))}
        </Slider>
      </Container>
    </section>
  );
};

export default Vision;*/




