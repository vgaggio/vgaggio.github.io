"use client";
import React from "react";
import CircleBackgroundBig from "./CircleBackgroundBig";
import Container from "./Container";
import Title from "./Title";

import logoWharton from "../../images/logos/wharton-sin-color.svg";
import logoPlatanus from "../../images/logos/platanusventures-blanco.svg";
import logoLatitud from "../../images/logos/latitud-logo.svg";
import logoAWS from "../../images/logos/aws-blanco.svg";
import logoOpen from "../../images/logos/openai.svg";
import logoCypher from "../../images/logos/cypher-sin-color.svg";
//import logoMicrosoft from "@/images/logos/microsoft.svg";
//import logoCypherB from "../../images/logos/cypher-sin-color.svg";

import Image from "next/image";
import { useTranslation } from "next-i18next";

const BackedBy = () => {
  const { t } = useTranslation();
  const logos = [
    { _id: 2001, title: "Wharton", logo: logoWharton },
    { _id: 2002, title: "Cypher", logo: logoCypher },
    { _id: 2003, title: "Platanus", logo: logoPlatanus },
    { _id: 2004, title: "Latitud", logo: logoLatitud },
    { _id: 2005, title: "OpenAI", logo: logoOpen },
    { _id: 2006, title: "AWS", logo: logoAWS },
    // { _id: 2007, title: "AWS", logo: logoCypherB },
    // { _id: 2008, title: "HuffPost", logo: logoHuffpost },
  ];
  return (
    <section
      id="backed-by"
      className="relative overflow-hidden bg-gray-900 py-20 sm:py-28"
    >
      <div className="absolute left-20 top-1/2 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
        <CircleBackgroundBig color="#fff" className="animate-spin-slower" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-md sm:text-center">
          <Title
            title={t("backedBy")}
            className="text-3xl text-white sm:text-4xl"
          />
          <div className="relative -mt-4 lg:col-span-7 lg:mt-0 xl:col-span-6">
            <ul
              role="list"
              className="grid lg:grid-cols-2 mx-auto mt-12 max-w-xl justify-center gap-x-10 gap-y-8 lg:mx-0 lg:justify-start"
            >
              {logos.map(({ title, logo }) => (
                <li key={title}>
                  <Image src={logo} alt={title} className="h-8" unoptimized/>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BackedBy;
