"use client";

import React, { useState, useEffect } from "react";
import Container from "./Container";
import Title from "./Title";
import Button from "./Button";
import { BsPlayCircle } from "react-icons/bs";
import BackgroundDesign from "./BackgroundDesign";
import PhoneFrame from "./PhoneFrame";
import AppFeature from "./AppFeature";
import { useTranslation } from "next-i18next";
import { toast, Toaster } from "sonner";


const Hero = () => {
  const { t, i18n } = useTranslation();

  const [isVisible, setIsVisible] = useState(false);
  const isMobile =
    typeof window !== "undefined" && window.innerWidth <= 500;
  const [languageReady, setLanguageReady] = useState(false); // Estado para indicar si el idioma está listo para cambiar
  const [languageChangeFlag, setLanguageChangeFlag] = useState(false); // Estado para forzar el cambio de idioma

  useEffect(() => {
    // Establece un temporizador para indicar que el idioma está listo para cambiar después de 1 segundo
    const languageTimer = setTimeout(() => {
      setIsVisible(true);
      setLanguageReady(true);
    }, 1000);
    return () => clearTimeout(languageTimer);

  }, []);

  useEffect(() => {
    // Cambia el estado del indicador de cambio de idioma
    setLanguageChangeFlag(!languageChangeFlag);
  }, [i18n.language]); // Escucha cambios en el idioma

  return (
    <section
      id="home"
      className={`overflow-hidden transition-opacity duration-100 
      ${isMobile ? "mt-6 py-10" : "py-32"} ${isVisible ? "opacity-100" : "opacity-0"
        }`}
    >
      <Container>

      <Toaster position="bottom-right" /> {/* Asegúrate de tener el Toaster aquí */}
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
          {/* Right side */}
          <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
            <Title
              title={t("heroTitleCol")}
              className={`text-4xl transition-opacity duration-100 ${isVisible ? "opacity-100" : "opacity-0"
                }`}
            />
            <p
              className={`mt-6 text-md text-gray-600 transition-opacity duration-500 ${isVisible ? "opacity-100" : "opacity-0"
                }`}
            >
              {t("heroSubtitleCol")}
              <EmailSender />

            </p>
            <div
              className={`mt-8 flex flex-wrap items-center gap-x-6 gap-4 transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"
                }`}
            >

            </div>

          </div>
          {/* Left side */}
          <div className="relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
            <BackgroundDesign className="absolute left-1/2 top-4 h-[1026px] w-[1026px] -translate-x-1/3 stroke-gray-300/70 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)] sm:top-16 sm:-translate-x-1/2 lg:-top-16 lg:ml-12 xl:-top-14 xl:ml-0" />
            <div className="-mx-4 h-[448px] px-9 [mask-image:linear-gradient(to_bottom,white_60%,transparent)] sm:mx-0 lg:absolute lg:-inset-x-10 lg:-bottom-20 lg:-top-10 lg:h-auto lg:px-0 lg:pt-10 xl:-bottom-32">
              {languageReady && ( // Solo renderiza PhoneFrame cuando el idioma está listo para cambiar
                <PhoneFrame
                  className={`max-w-[366px] mx-auto bg-white transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"
                    }`}
                  style={{ transitionDelay: isVisible ? "1000ms" : "0ms" }}
                  key={languageChangeFlag} // Agrega una clave única para forzar la actualización cuando cambia el idioma
                >
                  <AppFeature />
                </PhoneFrame>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;


function EmailSender() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState({ name: '', job: '' });
  const { t, i18n } = useTranslation();
  const [isInvalidDomain, setIsInvalidDomain] = useState(false);


  const extractInfo = (email, language = i18n.language) => {
    // Extraer la parte local y el dominio
    const [localPart, domain] = email.split('@');

    // Inicializar las variables de nombre y trabajo
    let name = '';
    let job = '';

    // Saludos dependiendo del idioma
    const greetingEs = 'Querido';
    const greetingEn = 'Dear';

    // Detectar si la parte local es numérica
    if (/^\d+$/.test(localPart)) {
      if (language === 'es') {
        name = greetingEs;
      } else if (language === 'en') {
        name = greetingEn;
      } else {
        name = greetingEs;  // Por defecto en español
      }
    } else {
      // Capitalizar la primera letra del nombre
      name = localPart.charAt(0).toUpperCase() + localPart.slice(1);
    }

    // Extraer el trabajo del dominio, considerando solo la parte antes del primer '.'
    job = domain.split('.')[0];
    job = job.toUpperCase();

    return { name, job };
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    // Verificar si el correo contiene dominios no permitidos
    if (value.includes('@hotmail') || value.includes('@gmail') || value.includes('@yahoo') || value.includes('@outlook')) {
      setIsInvalidDomain(true);
    } else {
      setIsInvalidDomain(false);
    }
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    const { name, job } = extractInfo(email);

    setResult({ name, job });
    console.log("name ", result.name)
    console.log("job ", result.job)
    setIsSubmitting(true);
    try {
      // Realiza la solicitud al backend
      const response = fetch(`https://emailservice.openharbor.xyz/aws/ses/requestDemo`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_name: result.name, // Utiliza el nombre extraído
          email: email,
          language: i18n.language,
          work_email: result.job // Utiliza el trabajo extraído
        }),
      });

      if (response.ok) {
        setEmail("");
        setIsSubmitting(false);
        toast.success(t("emailSent"));
        setOpinion('');
      } else {
        setIsSubmitting(false);
        toast.error(t("errorTryAgain"));
      }
    } catch (error) {
      setIsSubmitting(false);
      toast.error(t("connectionError"));
    }
  };

  return (
    <div className="flex items-center mt-8 animate-fade-in-down">
      <div className="flex flex-col">

        <div className="absolute">
          <svg className="arrow" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 43.1 85.9" style={{ enableBackground: 'new 0 0 43.1 85.9' }} width="43.1" height="85.9">
            <path strokeLinecap="round" strokeLinejoin="round" className="st0 draw-arrow" d="M11.3,2.5c-5.8,5-8.7,12.7-9,20.3s2,15.1,5.3,22c6.7,14,18,25.8,31.7,33.1" stroke="#171717" fill="none" strokeWidth="5px"></path>
            <path strokeLinecap="round" strokeLinejoin="round" className="draw-arrow tail-1" d="M40.6,78.1C39,71.3,37.2,64.6,35.2,58" stroke="#171717" fill="none" strokeWidth="5px"></path>
            <path strokeLinecap="round" strokeLinejoin="round" className="draw-arrow tail-2" d="M39.8,78.5c-7.2,1.7-14.3,3.3-21.5,4.9" stroke="#171717" fill="none" strokeWidth="5px"></path>
          </svg>


        </div>
        <Title
          title={t("tryBircleEmail")}
          className={`text-xl transition-opacity ml-14 m-t-2`}
        />
        <form
          className="mt-6 ml-14 flex w-full max-w-md rounded-lg bg-white p-2 shadow-lg animate-slide-in-up"
        >
          <input
            type="email"
            placeholder={t("inputWorkEmail")}
            value={email}
            onChange={handleInputChange}
            className="flex-1 border-none bg-transparent px-4 text-sm text-gray-700 placeholder-gray-400 focus:outline-none"
          />

          <button
            onClick={handleButtonClick}
            type="submit"
            className={`flex items-center justify-center rounded-lg bg-black p-2 text-white transition duration-300 ease-in-out hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-[#A5D2E4] focus:ring-opacity-50 ${email && !isInvalidDomain ? "cursor-pointer hover:opacity-80" : "opacity-50 cursor-not-allowed bg-gray-300 text-gray-600"
              }`}
            disabled={isSubmitting || !email || isInvalidDomain} // Deshabilitar si está enviando, si el email está vacío o si es un dominio no permitido
          >
            {isSubmitting ? <LoaderIcon className="h-4 w-4 animate-spin" /> : <ChevronRightIcon className="h-4 w-4" />}
          </button>

        </form>
        {isInvalidDomain && (
          <p className="text-red-500 text-xs mt-1 ml-16">{t("inputWorkEmail")}</p>
        )}
      </div>
    </div>
  );
}



function ChevronRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}


function LoaderIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2v4" />
      <path d="m16.2 7.8 2.9-2.9" />
      <path d="M18 12h4" />
      <path d="m16.2 16.2 2.9 2.9" />
      <path d="M12 18v4" />
      <path d="m4.9 19.1 2.9-2.9" />
      <path d="M2 12h4" />
      <path d="m4.9 4.9 2.9 2.9" />
    </svg>
  )
}
