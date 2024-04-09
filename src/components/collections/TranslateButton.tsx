"use client";
import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "next-i18next";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image"; 

const TranslateButton = () => {
  const { i18n } = useTranslation();
  const [showLanguages, setShowLanguages] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const buttonRef = useRef(null);

  const languageList = [
    { code: "en", text: "EN", flag: "https://cdn.weglot.com/flags/rectangle_mat/us.svg" },
    { code: "es", text: "ES", flag: "https://cdn.weglot.com/flags/rectangle_mat/ar.svg" }
  ];

  useEffect(() => {
    const setResponsiveness = () => {
      setIsMobile(window.innerWidth < 500);
    };
    setResponsiveness();
    window.addEventListener("resize", setResponsiveness);
    return () => {
      window.removeEventListener("resize", setResponsiveness);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 2000); // Aparece después de 3 segundos
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    const defaultLanguage = "en";
    const languageToUse = savedLanguage || defaultLanguage;
    i18n.changeLanguage(languageToUse);
  }, [i18n]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (buttonRef.current && !buttonRef.current.contains(event.target)) {
        setShowLanguages(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [buttonRef]);

  const changeLanguage = (code) => {
    localStorage.setItem("language", code);
    i18n.changeLanguage(code);
  };

  const currentLanguage = languageList.find(language => language.code === i18n.language) || languageList[0]; // Usamos el primer idioma como valor predeterminado si no se encuentra el idioma actual

  return (
    <div className="fixed bottom-0 left-4" style={{ zIndex: 100000 }}>
      <AnimatePresence>
        {showButton && (
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <div
                className="flex items-center text-white px-4 py-2 rounded-t rounded-tl-none cursor-pointer relative font-semibold"
                style={{
                  backgroundColor: 'rgba(0, 86, 153, 0.8)', // color principal
                  fontWeight: '600',
                  backdropFilter: 'blur(8px)',
                  color: 'white'
                }}
                onClick={() => {
                  setShowLanguages(!showLanguages);
                }}
                ref={buttonRef}
              >
                <div className="flex items-center rounded-t rounded-tl-none font-semibold">
                  {currentLanguage && (
                    <Image src={currentLanguage.flag} alt={i18n.language + " Flag"} width={24} height={24} className="mr-2" />
                  )}
                  {isMobile ? (i18n.language === "en" ? "EN" : "ES") : (i18n.language === "en" ? "EN" : "ES")}
                </div>
              </div>

              <AnimatePresence>
                {showLanguages && (
                  <motion.div
                    className="absolute rounded-t overflow-hidden font-semibold"
                    initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: isMobile ? 10 : 20 }}
                    transition={{ type: "spring", damping: 20, stiffness: 300 }}
                    style={{
                      bottom: "2.5rem",
                      backgroundColor: 'rgba(159,201,240, 0.5)', // color secundario 159,201,240
                      fontWeight: '600',
                      backdropFilter: 'blur(8px)',
                      color: 'white'
                    }}
                  >
                    {languageList.map((language) => (
                      language.code !== i18n.language && (
                        <div key={language.code} className="flex items-center p-2 cursor-pointer " onClick={() => changeLanguage(language.code)}>
                          <Image src={language.flag} alt={language.text + " Flag"} width={24} height={24} className="mr-2"/>
                          <div style={{fontWeight: 'semibold'}}>{isMobile ? language.code.toUpperCase() : language.text}</div>
                        </div>
                      )
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TranslateButton;
