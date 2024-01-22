"use client";
import React from "react";
import Container from "./Container";
import Title from "./Title";
import ReviewGrid from "./ReviewGrid";
import { useTranslation } from "next-i18next";

const Reviews = () => {
  const { t } = useTranslation();
  return (
    <section
      id="reviews"
      aria-labelledby="reviews-title"
      className="pb-16 pt-20 sm:pb-24 sm:pt-32"
    >
      <Container>
        <Title
          title={t('reviewsTitle')}
          id="reviews-title"
          className="text-3xl font-medium tracking-tight text-gray-900 sm:text-center"
        />
        <p className="mt-2 text-lg text-gray-600 sm:text-center">
        {t('reviewsSubtitle')}
        </p>
        <ReviewGrid />
      </Container>
    </section>
  );
};

export default Reviews;
