"use client";
import React, { useState, useEffect } from "react";
import Container from "./Container";
import Title from "./Title";
import { pricingDataCol } from "../../constants";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import Button from "./Button";
import { motion } from "framer-motion";


const Pricing = () => {
  const { t } = useTranslation();
  const [hovered, setHovered] = useState(false);
  const [animationState, setAnimationState] = useState(false);
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 500;

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationState((prevState) => !prevState);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <section id="pricing" className={isMobile ? "py-20" : "py-30"}>
      <Container aria-label="Features for building a portfolio">
        <div className=" mx-auto max-w-2xl sm:text-center">
          <Title
            title={t("pricingTitleCol")}
            className={`text-2xl text-center ${isMobile ? "mt-12" : ""}`}
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
                  className={`mt-6 ml-3 font-semibold text-gray-900 group-hover:text-black duration-300 ${isMobile ? "text-lg" : "text-base"
                    }`}
                >
                  {t(item.name)}
                </h3>
                <p
                  className={`mt-6 ml-3 text-gray-700 group-hover:text-black duration-300 ${isMobile ? "text-md" : "text-base"
                    }`}
                >
                  {t(item.description)}
                </p>
                <h3
                  className={`mt-6 ml-3 font-semibold text-gray-900 group-hover:text-black duration-300 ${isMobile ? "text-md" : "text-base"
                    }`}
                >
                  {t(item.ammount)}
                </h3>
                <hr className="flex justify-center my-4 border-gray-300" />{" "}

                <div className="flex justify-center">
                  {" "}
                  {/* Contenedor para centrar el botón */}

                  <motion.div
                    animate={{
                      scale: hovered ? 1.05 : 1, // Escala aumenta al hacer hover
                    }}
                    transition={{
                      duration: 0.2, 
                      ease: "easeInOut", 
                    }}
                    onHoverStart={() => setHovered(true)}
                    onHoverEnd={() => setHovered(false)}
                  >
                    <Button
                      href="https://cal.com/marcoslozada/demo-bircleai?date=2024-04-22&month=2024-04"
                      variant="outline"
                      className={`py-2 px-4 bg-white text-gray-800 text-sm font-bold rounded transition duration-200 ${hovered ? 'hover:shadow-lg hover:bg-blue-100' : ''
                        }`} 
                      target="_blank"
                    >
                      {t("pricingButton")}
                    </Button>
                  </motion.div>


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
