import React from "react";
import CircleBackground from "./CircleBackground";
import Container from "./Container";
import Title from "./Title";

const CallToAction = () => {
  return (
    <section
      id="get-free-shares-today"
      className="relative overflow-hidden bg-gray-900 py-20 sm:py-28"
    >
      <div className="absolute left-20 top-1/2 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
        <CircleBackground color="#fff" className="animate-spin-slower" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-md sm:text-center">
          <Title
            title="Manage all your interactions from one place"
            className="text-3xl text-white sm:text-4xl"
          />
          <p className="mt-4 text-lg text-gray-300">
          An enterprise-level messaging platform powered by artificial intelligence that consolidates customer communication for organizations that market, sell, and provide support through instant messaging and online chat.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default CallToAction;
