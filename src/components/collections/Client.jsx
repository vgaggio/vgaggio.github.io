"use client";
import React, { useState, useEffect, useRef } from "react";
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
import styled from "styled-components";

const StyledSlider = styled(Slider)`
  .slick-dots {
    bottom: -30px;

    li {
      width: 24px;
      height: 4px;
      background-color: transparent;
      margin: 0 5px;

      button {
        width: 100%;
        height: 100%;
        padding: 0;
        background-color: gray;
        border: none;
        outline: none;
        border-radius: 2px; /* Add border-radius here */

        &:before {
          content: '';
          display: block;
          width: 100%;
          height: 100%;
          background-color: gray;
          transition: background-color 0.3s;
          border-radius: 2px; /* Add border-radius here */
        }
      }

      &.slick-active button:before {
        background-color: white;
      }
    }
  }
`;

const Client = () => {
    const { t, i18n } = useTranslation();

    const [isMobile, setIsMobile] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

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

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    } else {
                        setIsVisible(false);
                    }
                });
            },
            { threshold: 0.1 } // Adjust the threshold as needed
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

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
        <section ref={sectionRef} id="clients" className={`bg-gray-900 ${isMobile ? "py-20" : "py-40"}`}>
            <Container>
                {/*<div className="flex items-center mx-auto max-w-3xl justify-center p-6 pb-10 rounded-lg">
                    <p className={`${isMobile ? "text-lg text-center text-slate-200 px-5 flex-1" : "text-lg text-center text-slate-200 px-10 flex-1"}`}>
                        {t('Resuelve Tus Deudas con Facilidad y Tranquilidad')}
                    </p>
                </div>*/}
                <div>
                    <Title
                        title={t('howItWorksTitleCol')}
                        className="text-3xl text-white pt-6 text-center"
                    />
                    <StyledSlider {...settings} className="mx-auto max-w-6xl text-left py-6">
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
                                    <div className={`${isMobile ? "p-2 text-gray-400 text-left text-xs" : "p-4 text-gray-400 text-left text-sm"}`}>{t(item.text)}</div>
                                </div>
                            </div>
                        ))}
                    </StyledSlider>
                </div>
            </Container>
        </section>
    );
};

export default Client;

