"use client";
import React, { useState, useEffect } from "react";
import Container from "./Container";
import Title from "./Title";
import { useTranslation } from "react-i18next";
import { DataVision } from "../../constants";

const Vision = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 500;

  useEffect(() => {
    const handleScroll = () => {
      const threshold = isMobile ? 2200 : 2650;
      setIsVisible(window.scrollY > threshold);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [isMobile]);

  return (
    <section id="vision" className={isMobile ? "py-20" : "py-32"}>
      <Container aria-label="Vision Section">
        <div className="mx-auto max-w-6xl sm:text-center">
          <div className="flex flex-wrap justify-center items-start">
            <div className="w-full md:w-1/2 flex justify-center flex-col items-center">
              <Title
                title={t("Visión")}
                className="text-4xl pb-10 font-semibold mb-4"
                style={{ marginTop: isMobile ? "0" : "3rem" }}
              />
              <div
                className={`hover:scale-105 w-full sm:max-w-none sm:min-w-[320px] sm:w-auto text-left shadow-2xl shadow-light rounded-[40px] p-8 transition-opacity duration-2000 ease-in-out ${isVisible ? "opacity-100" : "opacity-0"}`}
                style={{
                  width: "400px",
                  height: "400px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <p className="text-lg ml-5">{t("Vision de la Empresa")}</p>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center flex-col items-center">
              <Title
                title={t("Valores")}
                className="text-4xl pb-10 font-semibold mb-4"
                style={{ marginTop: isMobile ? "0" : "3rem" }}
              />
              <div
                className={`hover:scale-105 w-full sm:max-w-none sm:min-w-[320px] sm:w-auto justify-center shadow-2xl shadow-light rounded-[40px] p-8 transition-opacity duration-2000 ease-in-out ${isVisible ? "opacity-100" : "opacity-0"}`}
                style={{
                  width: "400px",
                  height: "400px",
                  paddingTop: 0,
                  paddingBottom: 0,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <div className="flex flex-col items-center">
                  <ul
                    role="list"
                    className={`mt-4 grid max-w-2xl grid-cols-1 gap-2 text-sm sm:mt-6 md:gap-y-2 lg:max-w-none`}
                    style={{
                      margin: 0,
                      alignItems: "center"
                    }}
                  >
                    {DataVision.map((item, index) => (
                      <li
                        key={index}
                        className={`rounded-2xl p-2 transition-transform duration-500 group flex items-center text-base`}
                        style={{
                          marginBottom:
                            index === DataVision.length - 1 ? 0 : "8px",
                          width: "100%"
                        }}
                      >
                        <img
                          src={item.icon}
                          alt={item.name}
                          className="h-8 w-8 mr-2 sm:h-10 sm:w-10 small-icon"
                          style={{ width: "20px", height: "20px" }}
                        />
                        <span className="block text-center">
                          {t(item.name)}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Vision;
