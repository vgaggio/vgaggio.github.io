"use client";
import React, { useState, useEffect, useRef } from "react";
import Container from "./Container";
import Title from "./Title";
import { modelDataCol } from "../../constants";
import { useTranslation } from "react-i18next";
import Image from "next/image";

const Model = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useRef(null);
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 500;

  useEffect(() => {
    const handleScroll = () => {
      const threshold = isMobile ? 610 : 300;
      if (window.scrollY > threshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);

      // Obtener la altura del encabezado
      setHeaderHeight(headerRef.current.clientHeight);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [isMobile]);

  const handleModelClick = () => {
    // Calcular el desplazamiento ajustado restando la altura del encabezado
    const destination = document.getElementById("model").offsetTop - headerHeight;
    window.scrollTo({ top: destination, behavior: "smooth" });
  };

  return (
    <section id="model" className={isMobile ? "py-10" : "py-40" }>
      <div ref={headerRef}> {/* Ref al encabezado para obtener su altura */}
        {/* Contenido de tu encabezado */}
      </div>
      <Container aria-label="Features for building a portfolio">
        <div className="mx-auto max-w-2xl sm:text-center">
          <Title
            title={t("modelTitle")}
            className={`text-3xl transition-opacity duration-4000 text-center ${
              isVisible ? "opacity-100 ease-in-out" : "opacity-0"
            }`}
          />
        </div>

        <ul
          role="list"
          className="mt-8 mb-24 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 sm:grid-cols-1 md:gap-y-10 lg:max-w-none lg:grid-cols-1"
        >
          {modelDataCol.map((item, index) => (
            <li
              key={t(item.name)}
              className={`w-full sm:max-w-none sm:min-w-[320px] sm:w-auto justify-center shadow-2xl shadow-light rounded-[40px] p-8 transition-opacity duration-2000 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
              style={{
                transitionDelay: `${
                  isVisible ? (isMobile ? index * 200 : index * 1000) : 0
                }ms`,
                opacity: isVisible ? 1 : 0,
                ...(isMobile && {
                  transform: "none",
                  transition: `opacity 2000ms ease-in-out ${
                    isVisible ? index * 200 : 0
                  }ms`,
                }),
                ...(!isMobile && {
                  transform: isVisible
                    ? "translateX(0)"
                    : `translateX(${index % 2 === 0 ? "-" : ""}100px)`,
                  transition: `opacity 2000ms ease-in-out ${
                    isVisible ? index * 200 : 0
                  }ms, transform 1000ms ease-in-out ${
                    isVisible ? index * 200 : 0
                  }ms`,
                }),
              }}
            >
              {!isMobile ? (
                <Image
                  className="h-12 w-12 mr-4 sm:h-16 sm:w-16 sm:mr-8 float-left"
                  src={item.icon}
                  alt=""
                  height={10}
                  width={10}
                />
              ) : (
                <Image
                  className="h-12 w-12 mb-2"
                  src={item.icon}
                  alt=""
                  height={10}
                  width={10}
                />
              )}
              <div>
                <h3 className="pt-1 sm:pt-5 font-semibold text-gray-900 text-sm sm:text-base">
                  {t(item.name)}
                </h3>
              </div>
            </li>
          ))}
        </ul>
       
      </Container>
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
