"use client";
import React from "react";
import Container from "./Container";
import Title from "./Title";
import { pricingData } from "../../constants";
import { useTranslation } from "react-i18next";
import Image from "next/image";

const Pricing = () => {
  const { t } = useTranslation();
  return (
    <section>
      <Container
        id="pricing"
        aria-label="Features for building a portfolio"
        className="py-20 sm:py-32"
      >
        <div className=" mx-auto max-w-2xl sm:text-center">
          <Title
            title={t('pricingTitle')}
            className="text-2xl"
          />
          <p className="mt-2 text-lg text-gray-600">
          {t('pricingSubtitle')}
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 mb-24 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-2"
        >
          {pricingData.map((item) => (
            <li
              key={t(item.name)}
              className="rounded-2xl border border-gray-200 hover:border-gray-300 p-8 group hover:bg-gray-100 duration-300 cursor-pointer"
            >
              <Image className="h-16 w-16" src={item.icon} alt="" height={10} width={10}/>
              <h3 className="mt-6 font-semibold text-gray-900 group-hover:text-black duration-300">
                {t(item.name)}
              </h3>
              <p className="mt-2 text-gray-700 group-hover:text-black duration-300">
                {t(item.description)}
              </p>
              <h3 className="mt-6 font-semibold text-gray-900 group-hover:text-black duration-300">
                {t(item.ammount)}
              </h3>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default Pricing;