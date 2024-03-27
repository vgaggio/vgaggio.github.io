"use client";
import React, { useState, useEffect } from "react";
import Container from "./Container";
import Title from "./Title";
import { pricingDataCol } from "../../constants";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import Button from "./Button";

const Pricing = () => {
  const { t } = useTranslation();
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 500;
  return (
    <section id="pricing" className={isMobile ? "py-20" : "py-40"}>
      <Container aria-label="Features for building a portfolio">
        <div className=" mx-auto max-w-2xl sm:text-center">
          <Title
            title={t("pricingTitleCol")}
            className="text-2xl text-center"
          />
          <p className="mt-2 text-lg text-gray-600 text-center">
            {t("pricingSubtitleCol")}
          </p>
        </div>
        <div className="flex justify-center">
          <ul
            role="list"
            className=" mt-8 mb-10 grid grid-cols-1 gap-6 text-sm sm:mt-20 sm:grid-cols-1 md:gap-y-10 lg:grid-cols-1"
          >
            {pricingDataCol.map((item) => (
              <li
                key={t(item.name)}
                className={`sm:w-auto shadow-2xl shadow-light rounded-[40px] p-4 transition-opacity duration-2000`}
              >
                <Image
                  className="h-16 w-16 ml-3"
                  src={item.icon}
                  alt=""
                  height={10}
                  width={10}
                />
                <h3
                  className={`mt-6 ml-3 font-semibold text-gray-900 group-hover:text-black duration-300 ${
                    isMobile ? "text-lg" : "text-base"
                  }`}
                >
                  {t(item.name)}
                </h3>
                <p
                  className={`mt-6 ml-3 text-gray-700 group-hover:text-black duration-300 ${
                    isMobile ? "text-md" : "text-base"
                  }`}
                >
                  {t(item.description)}
                </p>
                <h3
                  className={`mt-6 ml-3 font-semibold text-gray-900 group-hover:text-black duration-300 ${
                    isMobile ? "text-md" : "text-base"
                  }`}
                >
                  {t(item.ammount)}
                </h3>
                <hr className="flex justify-center my-4 border-gray-300" />{" "}
                {/* Línea gris */}
                <div className="flex justify-center">
                  {" "}
                  {/* Contenedor para centrar el botón */}
                  <Button
                    href="https://api.whatsapp.com/send?phone=5493516152680"
                    variant="outline"
                    className="py-2 px-4 text-gray-800 text-sm rounded hover:bg-blue-100 transition duration-300"
                    target="_blank"
                  >
                    {t("pricingButton")}
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default Pricing;
