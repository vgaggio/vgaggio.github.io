"use client";
import React, { useState, useEffect } from "react";
import Container from "./Container";
import Title from "./Title";
import GestionPago1 from "../../../public/GestionDePagoEsp.svg";
import GestionPago2 from "../../../public/GestionDePagoEng.svg";
import Image from "next/image";
import { Gestion } from "../../constants";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { useTranslation } from "react-i18next";

const Client = () => {
    const { t, i18n } = useTranslation();

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 500);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const settings = {
        dots: true,
        appendDots: dots => (
            <div>
                <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
        ),
        customPaging: i => (
            <div
                className="rounded-full"
                style={{
                    width: "10px",
                    height: "10px",
                    margin: "0 5px"
                }}
            />
        ),
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        autoplay: true,  // Enable auto-play
        autoplaySpeed: 5000,  //
        pauseOnHover: true  // Pause auto-play on hover
    };

    const currentLanguage = i18n.language;
    const imageToShow = currentLanguage === 'en' ? GestionPago2 : GestionPago1;

    return (
        <section id="client" className={`bg-gray-900 ${isMobile ? "py-20" : "py-40"}`}>
            <Container>
                <div className="mx-auto max-w-xl text-center pb-16">
                    <Title
                        title={t('Gestion de Deuda')}
                        className="text-4xl text-white text-center"
                    />
                    <p className="mt-4 text-lg text-gray-300 text-center px-5">
                        {t('Explicacion de la Gestion de Deuda')}
                    </p>
                </div>
                <div
                    className="flex items-center mx-auto max-w-xl justify-center pt-4 rounded-3xl"
                    style={{
                      background: "linear-gradient(to right, #CAF1B8, #98C9F0)",
                  }}
                >
                    <div>
                        <Image src={imageToShow} className={`${isMobile ? "min-h-52 p-2" : "min-h-96 p-6"}`} alt="" layout="responsive" />
                    </div>
                </div>
                <div
                    className="flex items-center mx-auto max-w-3xl justify-center p-6 pb-10 rounded-lg"
                >
                    <p className={`${isMobile ? "text-lg text-center text-slate-200 px-5 flex-1" : "text-2xl text-center text-slate-200	 px-10 flex-1"}`}>
                        {t('Resuelve Tus Deudas con Facilidad y Tranquilidad')}
                    </p>
                </div>
                <div>
                    <Title
                        title={t('howItWorksTitleCol')}
                        className="text-3xl text-white pt-6 text-center"
                    />
                    <Slider {...settings} className="mx-auto max-w-xl text-center py-6">
                        {Gestion.map((item, index) => (
                            <div key={index} className="text-center py-2 px-6 ">
                                <div className="bg-gray-700 mx-auto max-w-md sm:text-center rounded-xl h-52 py-2 px-2 content-center"
                                >
                                    <div className="p-4 text-slate-200	 text-xl font-bold">{t(item.name)}</div>
                                    <div className="p-2 text-slate-200	 text-sm">{t(item.text)}</div>
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

