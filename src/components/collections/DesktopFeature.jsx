"use client";

import React, { useState, useRef, useEffect } from "react";
import { Tab } from "@headlessui/react";
import { useDebouncedCallback } from "use-debounce";
import { motion, useAnimation } from "framer-motion";
import clsx from "clsx";
import { features } from "./FrameView";
import CircleBackground from "./CircleBackground";
import { useTranslation } from "next-i18next";
import Image from "next/image";

const usePrevious = (value) => {
  let ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);
};

const DesktopFeature = () => {
  const { t } = useTranslation();
  const [changeCount, setChangeCount] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const prevIndex = usePrevious(selectedIndex);
  const isForwards = prevIndex === undefined ? true : selectedIndex > prevIndex;

  const animationControlsArray = features.map(() =>
    useAnimation()
  );

  useEffect(() => {
    const handleScroll = () => {
      const threshold = 1200;
      const isVisible = window.scrollY < threshold;

      if (isVisible) {
        animationControlsArray.forEach((control, index) => {
          setTimeout(() => {
            control.start({
              opacity: 1,
              y: 0,
              rotate: 0,
              scale: 1,
              transition: { duration: 2 }, // Ajusta la duración de la animación
            });
          }, 400 * index); // Ajusta el intervalo de tiempo entre animaciones
        });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [animationControlsArray]);

  return (
    <div className="grid grid-cols-12 items-center gap-8 lg:gap-16 xl:gap-24 px-6">
      <ul className="relative z-10 order-last col-span-6 space-y-6">
        {features.map((feature, featureIndex) => (
          <motion.li
            key={t(feature.name)}
            initial={{ opacity: 0, y: 50, rotate: -10, scale: 0.8 }}
            animate={animationControlsArray[featureIndex]}
            className="relative rounded-2xl transition-all hover:bg-gray-800/30"
          >
            {featureIndex === selectedIndex && (
              <motion.div
                layoutId="activeBackground"
                className="absolute inset-0 bg-gray-800"
                initial={{ borderRadius: 16 }}
              />
            )}
            <div className="relative z-10 p-8">
              <Image
                className="h-16 w-16"
                src={feature.icon}
                alt=""
                height={10}
                width={10}
              />
              <h3 className="mt-6 text-lg font-semibold text-white">
                <button
                  className="text-left [&:not(:focus-visible)]:focus:outline-none outline-none"
                  onClick={() => setSelectedIndex(featureIndex)}
                >
                  <span className="absolute inset-0 rounded-2xl" />
                  {t(feature.name)}
                </button>
              </h3>
              <p className="mt-2 text-sm text-gray-400">
                {t(feature.description)}
              </p>
            </div>
          </motion.li>
        ))}
      </ul>
      <div className="relative col-span-6">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <CircleBackground color="#98C9F0" className="animate-spin-slower" />
        </div>
      </div>
    </div>
  );
};

export default DesktopFeature;


export const FeatureMobile = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const slideContainerRef = useRef();
  const slideRefs = useRef([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Change this value according to your needs
    };

    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, options);

    if (slideContainerRef.current) {
      observer.observe(slideContainerRef.current);
    }

    return () => {
      if (slideContainerRef.current) {
        observer.unobserve(slideContainerRef.current);
      }
    };
  }, []);

  // Función para avanzar al siguiente slide
  const nextSlide = () => {
    const newIndex = (activeIndex + 1) % features.length;
    setActiveIndex(newIndex);
    if (isVisible) {
      slideRefs.current[newIndex].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'nearest',
      });
    }
  };

  // Establecer temporizador para cambiar de slide cada cierto tiempo
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 5000); // Cambiar cada 5 segundos (puedes ajustar el tiempo según tus necesidades)

    return () => clearInterval(intervalId);
  }, [activeIndex, isVisible]);

  return (
    
    <div className="h-auto flex flex-col">
  <div
    ref={slideContainerRef}
    className="-mb-4 flex snap-x snap-mandatory -space-x-4 overflow-x-auto overscroll-x-contain scroll-smooth pb-4 [scrollbar-width:none] sm:-space-x-6 [&::-webkit-scrollbar]:hidden"
  >
    {features.map((feature, featureIndex) => (
      <div
        key={featureIndex}
        ref={(ref) => (slideRefs.current[featureIndex] = ref)}
        className="flex-none snap-center px-4 sm:px-6" // Elimina la clase "fixed-width-element"
        style={{ minHeight: "68vw", width: "100vw" }} // Establece el ancho al 90% del ancho de la ventana
      >
        <div className="relative transform overflow-hidden rounded-2xl bg-gray-800 px-5 py-6" style={{ minHeight: "100%", minWidth: "100%" }}>

        <div className="inset-x-0 bottom-0 p-6 backdrop-blur sm:p-10">
                <Image
                  className="h-16 w-16"
                  src={feature.icon}
                  alt=""
                  height={10}
                  width={10}
                />
                <h3 className="mt-6 text-sm font-semibold text-white sm:text-lg">
                  {t(feature.name)}
                </h3>
                <p className="mt-2 text-sm text-gray-400">
                  {t(feature.description)}
                </p>
              </div>

        </div>
      </div>
    ))}
  </div>
  <div className="mt-6 flex justify-center gap-3">
    {features.map((_, featureIndex) => (
      <button
        type="button"
        key={featureIndex}
        className={clsx(
          'relative h-1 w-6 rounded-full',
          featureIndex === activeIndex ? 'bg-gray-300' : 'bg-gray-500'
        )}
        aria-label={`Go to slide ${featureIndex + 1}`}
        onClick={() => {
          setActiveIndex(featureIndex);
          if (isVisible) {
            slideRefs.current[featureIndex].scrollIntoView({
              behavior: 'smooth',
              block: 'nearest',
              inline: 'nearest',
            });
          }
        }}
      >
        <span className="absolute -inset-x-1.5 -inset-y-3" />
      </button>
    ))}
  </div>
</div>


  );
};
