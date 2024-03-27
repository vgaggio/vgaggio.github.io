"use client";
import React from "react";
import Container from "./Container";
import Title from "./Title";
import { useTranslation } from "react-i18next";
import Button from "./Button";


const InterestedIn = () => {
  const { t } = useTranslation();
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 500;

  return (
    <section className={isMobile ? "py-10" : "py-20"}>
      <Container id="interestedin" aria-label="Features for building a portfolio">
        <div >
          <div className="mx-auto max-w-l text-center">
            <Title title={t('interestedInTitleCol')} className="text-2xl" />
            <p className="mt-2 text-lg text-gray-600 text-center">{t('interestedInSubtitleCol')}</p>
            {/* Asegúrate de que el botón esté visible y centrado */}
            <div className="mt-4 flex justify-center">
              <Button
                href="https://bircle.ai/customersupport"
                variant="outline"
                className="py-2 px-4 bg-gray-500 text-white font-bold rounded hover:bg-gray-500 transition duration-300"
                target="_blank"
              >
                {t('interestedInButtonTitleCol')}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default InterestedIn;