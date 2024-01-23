"use client";
import React from "react";
import Container from "./Container";
import Title from "./Title";
import { useTranslation } from "react-i18next";
import Button from "./Button";


const InterestedIn = () => {
  const { t } = useTranslation();
  return (
    <section>
      <Container id="interestedin" aria-label="Features for building a portfolio">
        <div className="py-20 sm:py-32">
          <div className="mx-auto max-w-2xl sm:text-center">
            <Title title={t('interestedInTitleCol')} className="text-2xl" />
            <p className="mt-2 text-lg text-gray-600">{t('interestedInSubtitleCol')}</p>
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