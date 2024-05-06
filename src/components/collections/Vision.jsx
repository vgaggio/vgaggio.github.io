"use client";
import React, { useState } from "react";
import Container from "./Container";
import Title from "./Title";
import { useTranslation } from "react-i18next";
import { DataVision } from "../../constants";

const Vision = () => {
  const { t } = useTranslation();
  const [isFlipped, setIsFlipped] = useState({ card1: false, card2: false });

  const handleFlip = (card) => {
    setIsFlipped((prevState) => ({
      ...prevState,
      [card]: !prevState[card],
    }));
  };

  return (
    <section id="vision" className="py-32">
      <Container aria-label="Vision Section">
        <div className="mx-auto max-w-6xl sm:text-center">
          <div className="flex flex-wrap justify-center items-start">
            {/* Primera carta */}
            <div
              className="card-container-wrapper mr-20"
              onMouseEnter={() => handleFlip("card1")}
              onMouseLeave={() => handleFlip("card1")}
              style={{ borderRadius: "40px" }}
            >
              <div
                className={`hover: cursor-pointer card-container relative bg-gray-900 block p-6 border border-gray-100 rounded-lg max-w-sm mx-auto mt-24 ${isFlipped.card1 ? "flipped" : ""}`}
                style={{
                  width: "400px",
                  height: "400px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  transformStyle: "preserve-3d",
                  transform: isFlipped.card1 ? "rotateY(180deg)" : "rotateY(0deg)",
                  transition: "transform 1s",
                  borderRadius: "40px",
                  position: "relative",
                  boxShadow: "0px 0px 0px 4px #CAF1B8, 0px 0px 0px 8px #98C9F0",
                }}
              >
                {/* Frente de la carta */}
                <div
                  className="front-content absolute inset-0 w-full h-full flex flex-col justify-center items-center"
                  style={{
                    backfaceVisibility: "hidden",
                  }}
                >
                  <Title
                    title={t("Visión")}
                    className="text-white text-5xl pb-10 font-semibold mb-4"
                  />
                </div>

                {/* Dorso de la carta */}
                <div
                  className="back-content absolute inset-0 w-full h-full flex flex-col justify-center items-center"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  {/* Contenido trasero de la primera carta */}
                  <p className="text-white px-6 text-l ">{t("Vision de la Empresa")}</p>
                </div>
              </div>
            </div>

            {/* Segunda carta */}
            <div
              className="card-container-wrapper ml-20"
              onMouseEnter={() => handleFlip("card2")}
              onMouseLeave={() => handleFlip("card2")}
              style={{ borderRadius: "40px" }}
            >
              <div
                className={`hover: cursor-pointer card-container relative bg-gray-900 block p-6 border border-gray-100 rounded-lg max-w-sm mx-auto mt-24 ${isFlipped.card2 ? "flipped" : ""}`}
                style={{
                  width: "400px",
                  height: "400px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  transformStyle: "preserve-3d",
                  transform: isFlipped.card2 ? "rotateY(180deg)" : "rotateY(0deg)",
                  transition: "transform 1s",
                  borderRadius: "40px",
                  position: "relative",
                  boxShadow: "0px 0px 0px 4px #CAF1B8, 0px 0px 0px 8px #98C9F0",
                }}
              >
                {/* Frente de la carta */}
                <div
                  className="front-content absolute inset-0 w-full h-full flex flex-col justify-center items-center"
                  style={{
                    backfaceVisibility: "hidden",
                  }}
                >
                  <Title
                    title={t("Valores")}
                    className="text-white text-5xl pb-10 font-semibold mb-4"
                  />
                </div>

                {/* Dorso de la carta */}
                <div
                  className="back-content absolute inset-0 w-full h-full flex flex-col justify-center items-center"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  {/* Contenido trasero de la segunda carta */}
                  <ul
                    role="list"
                    className="text-white grid max-w-2xl grid-cols-1 gap-2 text-sm mt-6"
                    style={{
                      margin: 0,
                      alignItems: "center"
                    }}
                  >
                    {DataVision.map((item, index) => (
                      <li
                        key={index}
                        className="rounded-2xl p-2 transition-transform duration-500 group flex items-center text-base"
                        style={{
                          marginBottom: index === DataVision.length - 1 ? 0 : "8px",
                          width: "100%"
                        }}
                      >
                        <img
                          src={item.icon}
                          alt={item.name}
                          className="h-8 w-8 mr-2"
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

