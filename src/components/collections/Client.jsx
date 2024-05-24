"use client";
import React, { useState, useEffect } from "react";
import Container from "./Container";
import Title from "./Title";
import Phone1Esp from "../../../public/Phone1Esp.svg";
import Phone2Esp from "../../../public/Phone2Esp.svg";
import Phone1Eng from "../../../public/Phone1Eng.svg";
import Phone2Eng from "../../../public/Phone2Eng.svg";

import Image from "next/image";
import LineBackground from "./LineBackground";
import { Gestion } from "../../constants";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { useTranslation } from "react-i18next";

const Client = () => {
    const { t, i18n } = useTranslation();

    const [isMobile, setIsMobile] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 500);
        };

        const handleScroll = () => {
            const threshold = isMobile ? 610 : 300;
            setIsVisible(window.scrollY > threshold);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isMobile]);

    const settings = {
        dots: true,
        arrows: isMobile ? false : true,
        infinite: true,
        slidesToShow: isMobile ? 1 : 3,
        slidesToScroll: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true
    };

    const currentLanguage = i18n.language;
    const imageToShow1 = currentLanguage === 'en' ? Phone1Eng : Phone1Esp;
    const imageToShow2 = currentLanguage === 'en' ? Phone2Eng : Phone2Esp;

    return (
        <section id="client" className={`bg-gray-900 ${isMobile ? "py-20" : "py-40"}`}>
            <Container>
                <div className="mx-auto max-w-xl text-center pb-16">
                    <Title
                        title={t('Gestion de Deuda')}
                        className="text-4xl text-white text-center"
                    />
                    <div className="content-center flex items-center justify-content: center">
                        <LineBackground color1="#CAF1B8" color2="#98C9F0" width={isMobile ? 500 : 576} height={isMobile ? 60 : 80}/> {/* Línea como separación */}
                    </div>
                    <p className="text-lg text-gray-300 text-center px-5">
                        {t('Explicacion de la Gestion de Deuda')}
                    </p>
                </div>
                <div className="flex items-center mx-auto max-w-3xl justify-center rounded-3xl">
                    <div className="flex relative">
                        <Image
                            src={imageToShow1}
                            className={`transition-opacity duration-4000 ${isMobile ? "max-h-80 p-2" : "min-h-32 p-6"} ${isVisible ? "opacity-100 ease-in-out" : "opacity-0"}`}
                            alt=""
                            layout="responsive"
                            style={{
                                transform: isVisible
                                    ? "translateY(0)"
                                    : `translateY(-200px)`,
                                transition: `opacity 4000ms ease-in-out, transform 2000ms ease-in-out`,
                            }}
                        />
                        <Image
                            src={imageToShow2}
                            className={`transition-opacity duration-4000 ${isMobile ? "max-h-80 p-2" : "min-h-32 p-6"} ${isVisible ? "opacity-100 ease-in-out" : "opacity-0"}`}
                            alt=""
                            layout="responsive"
                            style={{
                                transform: isVisible
                                    ? "translatey(0)"
                                    : `translatey(200px)`,
                                transition: `opacity 4000ms ease-in-out, transform 2000ms ease-in-out`,
                            }}
                        />
                    </div>
                </div>

                <div className="flex items-center mx-auto max-w-3xl justify-center p-6 pb-10 rounded-lg">
                    <p className={`${isMobile ? "text-lg text-center text-slate-200 px-5 flex-1" : "text-lg text-center text-slate-200 px-10 flex-1"}`}>
                        {t('Resuelve Tus Deudas con Facilidad y Tranquilidad')}
                    </p>
                </div>
                <div>
                    <Title
                        title={t('howItWorksTitleCol')}
                        className="text-3xl text-white pt-6 text-center"
                    />
                    <Slider {...settings} className="mx-auto max-w-6xl text-left py-6">
                        {Gestion.map((item, index) => (
                            <div key={index} className="text-center py-2 px-6">
                                <div className={`${isMobile ? "bg-gray-700 mx-auto max-w-xl sm:text-left rounded-xl h-56 py-2 px-2 content-center" : "bg-gray-700 mx-auto max-w-xl sm:text-left rounded-xl h-72 py-2 px-2"}`}>
                                    <Image
                                        className={`${isMobile ? "px-2 h-10 w-12 sm:h-24 sm:w-20" : "px-2 h-10 w-10 sm:h-20 sm:w-20"}`}
                                        src={item.icon}
                                        alt=""
                                        height={30}
                                        width={30}
                                    />
                                    <div className={`${isMobile ? "p-2 text-slate-200 font-bold text-left text-base" : "p-2 text-slate-200 font-bold text-left text-xl"}`}>{t(item.name)}</div>
                                    <div className={`${isMobile ? "p-2 text-slate-200 font-bold text-left text-xs" : "p-4 text-slate-200 text-left text-sm"}`}>{t(item.text)}</div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </Container>
        </section>
    );
};

export default Client;
