"use client";
import React, { useState, useEffect, useRef } from "react";
import Vapi from "@vapi-ai/web";
import { ThumbsUp, ThumbsDown } from "../global/icons";
//import OpinionForm from "./OpinionForm";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import SphereWaiting from "./voiceSphereWaiting";
import SphereAnimation from "./voiceSphere";
import TranslateButton from "./../../components/collections/TranslateButton";


const vapi = new Vapi("5e176524-be64-44ce-b0f2-2c2be1de15a2");

interface Opinion {
  id: number;
  content: string;
  type: "positive" | "negative";
}

export default function VoiceAI() {
  const [connecting, setConnecting] = useState(false);
  const [connected, setConnected] = useState(false);
  const [assistantIsSpeaking, setAssistantIsSpeaking] = useState(false);
  const [volumeLevel, setVolumeLevel] = useState(0);
  const [texto, setTexto] = useState("Pruébalo!");
  const [opinions, setOpinions] = useState<Opinion[]>([]);
  const [formVisible, setFormVisible] = useState(false);
  const [opinionType, setOpinionType] = useState<"positive" | "negative">(
    "positive"
  );
  const { t, i18n } = useTranslation();


  const handleNewOpinion = (opinion: string, type: "positive" | "negative") => {
    const newOpinion: Opinion = {
      id: opinions.length + 1,
      content: opinion,
      type: type,
    };
    setOpinions([...opinions, newOpinion]);
    setFormVisible(false);
  };

  const handleCancel = () => {
    setFormVisible(false);
  };

  const { showPublicKeyInvalidMessage, setShowPublicKeyInvalidMessage } =
    usePublicKeyInvalid();

  useEffect(() => {
    
    console.log("idiome", i18n.language);

    vapi.on("call-start", () => {
      setConnecting(false);
      setConnected(true);
      setShowPublicKeyInvalidMessage(false);
    });

    vapi.on("call-end", () => {
      setConnecting(false);
      setConnected(false);
      setShowPublicKeyInvalidMessage(false);
    });

    vapi.on("speech-start", () => {
      setAssistantIsSpeaking(true);
    });

    vapi.on("speech-end", () => {
      setAssistantIsSpeaking(false);
    });

    vapi.on("volume-level", (level) => {
      setVolumeLevel(level);
      console.log("volu  ", level);
    });


    vapi.on("error", (error) => {
      console.error(error);
      setConnecting(false);
    });
  }, []);

  const startCallInline = () => {
    setConnecting(true);


    vapi.start("cd0af7ac-b4db-410f-a761-9370dc6f3118");
  };

  const endCall = () => {
    vapi.stop();
  };

  return (
    <>
      <div className="min-h-20 p-6 rounded-md">

        <div className="h-full flex justify-center items-center md:mt-36 md:mb-0 xs:mt-20 mt-10 mb-20 relative">
          <div className="p-3 shadow-2xl dark:shadow-gray-600  bg-gradient-to-bl from-[#98c9f0] to-[#caf1b8] md:w-48 md:h-48 h-48 w-48 aspect-square rounded-full animate-spin duration-1500">
            <div className="rounded-full h-full w-full bg-slate-100 "></div>
          </div>
          {!connected && connecting && (
            <div className="absolute flex flex-col justify-center items-center h-40 w-40 transition-transform duration-500 cursor-pointer" onClick={endCall}>

              <SphereWaiting />
            </div>
          )}

          {connected && !connecting && (
            <div className="flex absolute space-x-2 top-1/2 transform -translate-y-1/2" onClick={endCall}>


              <SphereTalk volumeLevel={volumeLevel} />

            </div>
          )}

          {!connected && !connecting && (
            <div className="absolute flex flex-col justify-center items-center h-40 w-40 hover:scale-105 transition-transform duration-500 cursor-pointer" onClick={startCallInline}>

              <SphereAnimation />

            </div>
          )}
        </div>

        <div className=" flex justify-center items-center sm:mt-4 mt-0">
          <div className="bg-white bg-opacity-10 rounded-[100px] shadow border  border-white border-opacity-10 backdrop-blur-[13.20px] px-3 py-2 mt-0">
            {!connected && connecting && (
              <div className="text-black  text-sm font-normal font-['Test Söhne'] leading-normal">
                {t('wait')}
              </div>
            )}
            {connected && !connecting && (
              <div className="text-black  text-sm font-normal font-['Test Söhne'] leading-normal">
                {t('turnOff')}
              </div>
            )}
            {!connected && !connecting && (
              <div className="text-black text-sm font-normal font-['Test Söhne'] leading-normal">
                {t('tryIt')}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className=" mx-auto pb-4">
        <div className="sm:w-[40%] w-[80%] mx-auto bg-white-300 rounded-lg p-6">
          {!formVisible && (
            <div>
              <h1 className="text-sm text-[#707070] dark:text-gray-400 text-center  mb-2">
                {t('opinion')}              
                </h1>

              <div className="flex justify-center">
                <ThumbsUp
                  fireFunction={() => {
                    setFormVisible(true);
                    setOpinionType("positive");
                  }}
                  className="hover:scale-110 bg-transparent rounded cursor-pointer mr-2 h-[24px] w-auto aspect-square fill-gray-400"
                />
                <ThumbsDown
                  fireFunction={() => {
                    setFormVisible(true);
                    setOpinionType("negative");
                  }}
                  className="hover:scale-110 bg-transparent rounded cursor-pointer h-[24px] w-auto aspect-square fill-gray-400"
                />
              </div>
            </div>
          )}
          {/*formVisible && (
            <OpinionForm
              onSubmit={handleNewOpinion}
              type={opinionType}
              onCancel={handleCancel}
            />
          )*/}
        </div>
        <TranslateButton />
      </div>

      {showPublicKeyInvalidMessage ? <PleaseSetYourPublicKeyMessage /> : null}
    </>
  );
}

const usePublicKeyInvalid = () => {
  const [showPublicKeyInvalidMessage, setShowPublicKeyInvalidMessage] =
    useState(false);

  useEffect(() => {
    if (showPublicKeyInvalidMessage) {
      setTimeout(() => {
        setShowPublicKeyInvalidMessage(false);
      }, 3000);
    }
  }, [showPublicKeyInvalidMessage]);

  return {
    showPublicKeyInvalidMessage,
    setShowPublicKeyInvalidMessage,
  };
};

const PleaseSetYourPublicKeyMessage = () => {
  return (
    <div
      style={{
        position: "fixed",
        bottom: "25px",
        left: "25px",
        padding: "10px",
        color: "#fff",
        backgroundColor: "#f03e3e",
        borderRadius: "5px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
      }}
    >
      Is your Vapi Public Key missing? (recheck your code)
    </div>
  );
};

interface SphereTalkDarkProps {
  volumeLevel: number;
}

const SphereTalkDark: React.FC<SphereTalkDarkProps> = ({ volumeLevel }) => {
  const sphereRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
@keyframes smoke {
0% { opacity: 0.4; }
50% { opacity: 0.8; }
100% { opacity: 0.4; }
}

@keyframes wave {
0% { transform: scale(0.5); opacity: 0.5; }
100% { transform: scale(1); opacity: 0; }
}

@keyframes inner-wave {
0% { transform: scale(0.5); opacity: 0.5; }
100% { transform: scale(1.5); opacity: 0; }
}

.sphere {
position: relative;
width: 10rem;
height: 10rem;
background: radial-gradient(circle, rgba(170, 215, 220, 0.3) 50%, #AAD7DC 100%);
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
overflow: hidden;
animation: move-up-down 4s infinite ease-in-out, bubble 4s infinite ease-in-out;
animation-timing-function: cubic-bezier(0.23, 1
  , 0.32, 1);
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.1), inset 0 0 20px rgba(255, 255, 255, 0.5);
}

.smoke {
  position: absolute;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 80%);
  animation: smoke 4s infinite ease-in-out;
}

.wave {
  position: absolute;
  width: 20px;
  height: 20px;
  background-color: transparent;
  border-radius: 50%;
  animation: wave 3s infinite ease-in-out alternate;
}

.inner-sphere {
  position: absolute;
  width: 4rem;
  height: 4rem;
  background-color: #AAD7DC;
  border-radius: 50%;
  animation: inner-wave 2s infinite ease-in-out alternate;
  transform: translate(-50%, -50%);
}
`;

    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  useEffect(() => {
    if (sphereRef.current) {
      const scaledVolume = volumeLevel / 100;
      sphereRef.current.style.setProperty('--audio-level', `${scaledVolume}`);
      sphereRef.current.style.animationDuration = `${4 - 3 * scaledVolume}s`;
    }
  }, [volumeLevel]);

  return (
    <div className="flex items-center justify-center">
      <div className="sphere" ref={sphereRef}>
        <div className="smoke" />
        {[...Array(5)].map((_, i) => (
          <div key={i} className="inner-sphere" style={{ animationDelay: `-${i * 0.4}s` }} />
        ))}
      </div>
    </div>
  );
};

interface SphereTalkProps {
  volumeLevel: number;
}

const SphereTalk: React.FC<SphereTalkProps> = ({ volumeLevel }) => {
  const sphereRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
    @keyframes smoke {
      0% { opacity: 0.4; }
      50% { opacity: 0.8; }
      100% { opacity: 0.4; }
    }

    @keyframes wave {
      0% { transform: scale(0.5); opacity: 0.5; }
      100% { transform: scale(1); opacity: 0; }
    }

    @keyframes inner-wave {
      0% { transform: scale(0.5); opacity: 0.5; }
      100% { transform: scale(1.5); opacity: 0; }
    }

    .sphere {
      position: relative;
      width: 10rem;
      height: 10rem;
      background: radial-gradient(circle, rgba(177, 215, 237, 0.3) 50%, #AAD7DC 100%);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      animation: move-up-down 4s infinite ease-in-out, bubble 4s infinite ease-in-out;
      animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
      box-shadow: 0 20px 30px rgba(0, 0, 0, 0.1), inset 0 0 20px rgba(255, 255, 255, 0.5);
    }

    .smoke {
      position: absolute;
      width: 100%;
      height: 100%;
      background: radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 80%);
      animation: smoke 4s infinite ease-in-out;
    }

    .wave {
      position: absolute;
      width: 20px;
      height: 20px;
      background-color: transparent;
      border-radius: 50%;
      animation: wave 3s infinite ease-in-out alternate;
    }

    .inner-sphere {
      position: absolute;
      width: 4rem;
      height: 4rem;
      background-color: #AAD7DC;
      border-radius: 50%;
      animation: inner-wave 2s infinite ease-in-out alternate;
      transform: translate(-50%, -50%);
    }
  `;

    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  useEffect(() => {
    if (sphereRef.current) {
      const scaledVolume = volumeLevel / 100;
      sphereRef.current.style.setProperty('--audio-level', `${scaledVolume}`);
      sphereRef.current.style.animationDuration = `${4 - 3 * scaledVolume}s`;
    }
  }, [volumeLevel]);

  return (
    <div className="flex items-center justify-center">
      <div className="sphere" ref={sphereRef}>
        <div className="smoke" />
        {[...Array(5)].map((_, i) => (
          <div key={i} className="inner-sphere" style={{ animationDelay: `-${i * 0.4}s` }} />

        ))}
      </div>
    </div>
  );
};
