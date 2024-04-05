"use client";

import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "next-i18next";
import { motion, AnimatePresence } from "framer-motion";

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
    }, 3000); // Aparece después de 3 segundos
    return () => clearTimeout(timer);
  }, []);

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
    localStorage.setItem("language", code); // Guardar el idioma seleccionado en localStorage
    window.location.reload(); // Recargar la página
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage && savedLanguage !== i18n.language) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  const currentLanguage = languageList.find(language => language.code === i18n.language);

  return (
    <div className="fixed bottom-4 left-4" style={{ zIndex: 100000 }}>
      <AnimatePresence>
        {showButton && currentLanguage && (
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <div
                className="flex items-center text-white px-4 py-2 rounded cursor-pointer relative font-semibold"
                style={{ backgroundColor: 'rgba(152, 201, 240, 0.9)', fontWeight: '600', backdropFilter: 'blur(8px)', color: 'white' }}
                onClick={() => {
                  setShowLanguages(!showLanguages);
                }}
                ref={buttonRef}
              >
                <div className="flex items-center">
                  <img src={currentLanguage.flag} alt={i18n.language + " Flag"} className="w-6 h-auto mr-2" />
                  {isMobile ? (i18n.language === "en" ? "EN" : "ES") : (i18n.language === "en" ? "EN" : "ES")}
                </div>
                <div className="ml-2" style={{ transform: `rotate(${showLanguages ? 90 : 0}deg)`, display: isMobile ? 'block' : 'inline-block', fontWeight: '600' }}>
                  &gt;
                </div>
              </div>

              <AnimatePresence>
                {showLanguages && (
                  <motion.div
                    className="absolute border border-gray-300 rounded shadow-lg overflow-hidden"
                    initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: isMobile ? 10 : 20 }}
                    transition={{ type: "spring", damping: 20, stiffness: 300 }}
                    style={{ bottom: isMobile ? "2.5rem" : "2.75rem", backgroundColor: 'rgba(152, 201, 240, 0.9)', fontWeight: '600', backdropFilter: 'blur(8px)', color: 'white' }}
                  >
                    {languageList.map((language) => (
                      language.code !== i18n.language && (
                        <div key={language.code} className="flex items-center p-2 cursor-pointer" onClick={() => changeLanguage(language.code)}>
                          <img src={language.flag} alt={language.text + " Flag"} className="w-6 h-auto mr-2" />
                          <div style={{fontWeight: 'normal'}}>{isMobile ? language.code.toUpperCase() : language.text}</div>
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
