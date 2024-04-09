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
  const [selectedIndex, setSelectedIndex] = useState(0);
  const animationControlsArray = features.map(() => useAnimation());
  const intervalRef = useRef(null);

  const nextFeature = () => {
    setSelectedIndex((prevIndex) =>
      prevIndex === features.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition >= 1200 && scrollPosition <= 2100) {
        if (!intervalRef.current) {
          intervalRef.current = setInterval(nextFeature, 3000);
        }
      } else {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        setSelectedIndex(0); // Reiniciar el índice cuando salimos del rango de scroll
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = () => {
    clearInterval(intervalRef.current);
  };

  const handleMouseLeave = () => {
    intervalRef.current = setInterval(nextFeature, 3000);
  };

  return (
    <div className="grid grid-cols-12 items-center gap-8 lg:gap-16 xl:gap-24 px-6">
      <ul className="relative z-10 order-last col-span-6 space-y-6">
        {features.map((feature, featureIndex) => (
          <motion.li
            key={t(feature.name)}
            className={`relative rounded-2xl transition-all hover:bg-gray-800/30 ${
              featureIndex === selectedIndex ? 'bg-gray-800/30' : ''
            }`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
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
  const [inSection, setInSection] = useState(false);
  const slideContainerRef = useRef();
  const slideRefs = useRef([]);

  const features = [
    {
      name: "featureOneTitleCol",
      description: "featureOneSubtitleCol",
      icon: "/Elementos-2D-16.svg",
    },
    {
      name: "featureTwoTitleCol",
      description: "featureTwoSubtitleCol",
      icon: "/Elementos-2D-08.svg",
    },
    {
      name: "featureThreeTitleCol",
      description: "featureThreeSubtitleCol",
      icon: "/Elementos-2D-12.svg",
    },
    {
      name: "featureFourTitleCol",
      description: "featureFourSubtitleCol",
      icon: "/Elementos-2D-06.svg",
    },
  ];

  const handleSlideChange = (index) => {
    slideRefs.current[index].scrollIntoView({
      block: 'nearest',
      inline: 'nearest',
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const startAnimationHeight = 1500; 
      const stopAnimationHeight = 1900; 
      
      if (scrollPosition > startAnimationHeight && scrollPosition < stopAnimationHeight) {
        setInSection(true);
      } else {
        setInSection(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    let interval;
    if (inSection) {
      interval = setInterval(() => {
        const nextIndex = (activeIndex + 1) % features.length;
        handleSlideChange(nextIndex);
      }, 3000);
    }

    return () => clearInterval(interval);
  }, [activeIndex, features.length, inSection]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (let entry of entries) {
          if (entry.isIntersecting) {
            setActiveIndex(slideRefs.current.indexOf(entry.target));
            setInSection(true);
            break;
          }
        }
      },
      {
        root: null,
        threshold: 0.9,
      }
    );

    slideRefs.current.forEach((slide) => {
      if (slide) {
        observer.observe(slide);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [slideRefs]);

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
            className="w-full flex-none snap-center px-4 sm:px-6"
            style={{ minHeight: "68vw", width: "100vw" }} 
         >
            <div className="relative transform overflow-hidden rounded-2xl bg-gray-800 px-5 py-6" 
                  style={{ minHeight: "100%", minWidth: "100%" }}
            >
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                {/* <CircleBackground
                  color="#98C9F0"
                  className="animate-spin-slower"
                /> */}
              </div>

              {/* <feature.screen /> */}

              <div className="inset-x-0 bottom-0 p-6 backdrop-blur sm:p-10">
                {/* <feature.icon className="h-8 w-8" /> */}
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
              "relative h-1 w-6 rounded-full",
              featureIndex === activeIndex ? "bg-gray-300" : "bg-gray-500"
            )}
            aria-label={`Go to slide ${featureIndex + 1}`}
            onClick={() => handleSlideChange(featureIndex)}
          >
            <span className="absolute -inset-x-1.5 -inset-y-3" />
          </button>
        ))}
      </div>
    </div>
  );
};