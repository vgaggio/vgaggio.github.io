"use client";
import React, { useState, useEffect } from "react";
import Container from "./Container";
import Title from "./Title";
import GestionPago from "../../../public/GestiondePago.svg";
import Image from "next/image";
import { Gestion } from "../../constants";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


import { useTranslation } from "react-i18next";

const Client = () => {
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
            background: "#CAF1B8", // Cambiar a tu color deseado
            margin: "0 5px"
          }}
        />
      ),
      arrows: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true
    };


    return(
        <section id="client" className={`bg-gray-900 ${isMobile ? "py-20" : "py-40"}`}>
            <Container>
                <div className="mx-auto max-w-md sm:text-center pb-10">
                    <Title
                        title={t('Gestion de Deuda')}
                        className="text-3xl text-white sm:text-4xl text-center"
                    />
                    <p className="mt-4 text-lg text-gray-300 text-center">
                    {t('Explicacion de la Gestion de Deuda')}
                    </p>
                </div>
                <div
                  className="flex items-center mx-auto max-w-3xl justify-between pt-4 rounded-lg"
                  style={{
                    background: "linear-gradient(to right, #CAF1B8, #98C9F0)",
                  }}
                >
                  <p className={`${isMobile ? "text-xl font-bold text-left text-white px-5 flex-1" : "text-2xl font-bold text-left text-white px-10 flex-1"}`}>
                    {t('Resuelve Tus Deudas con Facilidad y Tranquilidad')}
                  </p>
                  <div>
                    <Image src={GestionPago} className={`${isMobile ? "max-h-48 p-6" : "max-h-96 p-6"}`}alt="" layout="responsive" />
                  </div>
                </div>
                <div>
                <Title
                        title={t('howItWorksTitleCol')}
                        className="text-3xl text-white sm:text-4xl pt-6 text-center"
                    />
                    <Slider {...settings} className="mx-auto max-w-md text-center py-6">
                {Gestion.map((item, index) => (
                    <div key={index} className="text-lg text-center py-2 px-6">
                      <div className="bg-white mx-auto max-w-md sm:text-center rounded-xl">
                        <div className="p-4" >{t(item.name)}</div>
                        <div className="p-2">{t(item.text)}</div>
                      </div>
                    </div>
                  ))}
                </Slider>
                </div>
            </Container>
        </section>
    )
};

export default Client;