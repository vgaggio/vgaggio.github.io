"use client";
import React, { useState, useEffect } from "react";
import Container from "./Container";
import Title from "./Title";
import Button from "./Button";
import { BsPlayCircle } from "react-icons/bs";
// import ExtraLogos from "./ExtraLogos";
import BackgroundDesign from "./BackgroundDesign";
import PhoneFrame from "./PhoneFrame";
import AppFeature from "./AppFeature";
import { useTranslation } from "next-i18next";


const Hero = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 500;


  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
      <section 
      id="home" 
      className={`overflow-hidden transition-opacity duration-100 
      ${isMobile ? "mt-6 py-10" : "py-32"} ${isVisible ? "opacity-100" : "opacity-0"}`}>
      <Container>
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
          {/* Right side */}
          <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
            <Title
              title={t("heroTitleCol")}
              className={`text-4xl transition-opacity duration-100 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            />
            <p
              className={`mt-6 text-md text-gray-600 transition-opacity duration-500 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              {t("heroSubtitleCol")}
            </p>
            <div
              className={`mt-8 flex flex-wrap items-center gap-x-6 gap-4 transition-opacity duration-1000 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              {/* <Image className="w-32 h-auto" src={playStore} alt="playImg" /> */}
              {!isMobile ? (
                <>
                  <Button
                    variant="outline"
                    href="https://drive.google.com/file/d/1p1Gm1soZN0j8KtQzeuEoGTeOb00hMXYB/view?usp=drive_link"
                    style={{ transitionDelay: isVisible ? "1000ms" : "0ms" }}
                  >
                    <BsPlayCircle className="text-xl" />
                    <span className="ml-1">{t("heroWatchTheVideoCol")}</span>
                  </Button>
                  <Button
                    href="https://cal.com/marcoslozada/demo-bircleai"
                    variant="outline"
                    target="_blank"
                    style={{ transitionDelay: isVisible ? "2000ms" : "0ms" }}
                  >
                    {t("buttonOne")}
                  </Button>
                  <Button
                    href="https://api.whatsapp.com/send?phone=5493516152680"
                    variant="outline"
                    target="_blank"
                    style={{ transitionDelay: isVisible ? "3000ms" : "0ms" }}
                  >
                    {t("buttonTwo")}
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    variant="outline"
                    href="https://drive.google.com/file/d/1p1Gm1soZN0j8KtQzeuEoGTeOb00hMXYB/view?usp=drive_link"
                    style={{ transitionDelay: isVisible ? "1000ms" : "0ms" }}
                  >
                    <BsPlayCircle className="text-xl" />
                    <span className="ml-1">{t("heroWatchTheVideoCol")}</span>
                  </Button>
                  <Button
                    href="https://cal.com/marcoslozada/demo-bircleai"
                    variant="outline"
                    target="_blank"
                    style={{ transitionDelay: isVisible ? "2000ms" : "0ms" }}
                  >
                    {t("buttonOne")}
                  </Button>
                </>
              )}
            </div>
          </div>
          {/* Left side */}
          <div className="relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
            <BackgroundDesign className="absolute left-1/2 top-4 h-[1026px] w-[1026px] -translate-x-1/3 stroke-gray-300/70 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)] sm:top-16 sm:-translate-x-1/2 lg:-top-16 lg:ml-12 xl:-top-14 xl:ml-0" />
            <div className="-mx-4 h-[448px] px-9 [mask-image:linear-gradient(to_bottom,white_60%,transparent)] sm:mx-0 lg:absolute lg:-inset-x-10 lg:-bottom-20 lg:-top-10 lg:h-auto lg:px-0 lg:pt-10 xl:-bottom-32">
              <PhoneFrame
                className={`max-w-[366px] mx-auto bg-white transition-opacity duration-1000 ${
                  isVisible ? "opacity-100" : "opacity-0"
                }`}
                style={{ transitionDelay: isVisible ? "1000ms" : "0ms" }}
              >
                <AppFeature />
              </PhoneFrame>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
