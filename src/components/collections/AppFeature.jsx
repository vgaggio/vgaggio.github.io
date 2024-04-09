"use client";
import React, { useState, useEffect } from "react";
import "../../app/AppFeature.css";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import Typewriter from "../collections/TypeWriter";

const AppFeature = () => {
  const { t, i18n } = useTranslation();
  const [messages, setMessages] = useState([
    { id: 1, user: "You", text: "appHello" },
    { id: 2, user: "Me", text: "appAnswerDefaultCol" },

  ]);
  const [newMessage, setNewMessage] = useState("");
  const [keyProp, setKeyProp] = useState(0); // Estado para forzar el re-renderizado del Typewriter

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([
        ...messages,
        { id: messages.length + 1, user: "You", text: newMessage },
      ]);
      setNewMessage("");
    }
  };

  useEffect(() => {
    if (messages.length && messages[messages.length - 1].user === "You") {
      const userMessage = messages[messages.length - 1].text.toLowerCase();
      let replyText = "";

      switch (userMessage) {
        case t("appCaseOne"):
          replyText = t("appAnswerOne");
          break;
        case t("appCaseTwo"):
          replyText = t("appAnswerTwo");
          break;
        case t("appCaseThree"):
          replyText = t("appAnswerThree");
          break;
        default:
          replyText = t("appAnswerDefaultCol");
          break;
      }

      const timeoutId = setTimeout(() => {
        setMessages([
          ...messages,
          { id: messages.length + 1, user: "BircleAI", text: replyText },
        ]);
      }, 1000);

      return () => clearTimeout(timeoutId); // Limpiar el temporizador si el componente se desmonta
    }
  }, [messages, t]);

  // Actualizar keyProp cada vez que cambie el idioma
  useEffect(() => {
    setKeyProp((prevKey) => prevKey + 1);
  }, [i18n.language]);

  return (
    <div
      className="whatsapp-simulation"
      style={{
        backgroundImage:
          "url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')",
      }}
    >
      <header className="chat-header">
        <div className="header-content">
          <div className="header-title">
            <Image
              alt="header text"
              src="/logo2.svg"
              className="object-cover invert mr-2"
              width={30}
              height={30}
            />
            BircleAI
            <svg
              className="checkmark"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="#075E54"
            >
              <path d="M14.3 5.7a.999.999 0 0 1 1.4 1.4l-8 8a.997.997 0 0 1-1.4 0l-4-4a.999.999 0 1 1 1.4-1.4l3.3 3.3 7.3-7.3z" />
            </svg>
          </div>
        </div>
      </header>
      <div className="chat-body" style={styles.chatBody}>
        {messages.map((message) => (
          <div
            key={message.id}
            className={`message `}
            style={message.user === "You" ? styles.sent : styles.received}
          >
            <div className="message-text">
              {/* Pasar keyProp como prop para forzar el re-renderizado del Typewriter */}
              <Typewriter
                text={t(message.text)}
                initialDelay={3000}
                keyProp={keyProp}
              />
            </div>
            {/* Código para el mensaje recibido */}

            {message.user !== "You" && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <hr
                  style={{
                    width: "100%",
                    borderTop: "1px solid #ccc",
                    marginBottom: "1px",
                    marginTop: "5px",
                    opacity: 0,
                    animation: "fade-in 1s ease-in-out 11s forwards",
                  }}
                />

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    opacity: 0,
                    animation: "fade-in 1s ease-in-out 11s forwards",
                  }}
                >

                  <Image
                    src="/icon.png"
                    className=" mr-1 mt-1"
                    width={24}
                    height={24}
                    alt="Icono de enlace"
                    style={{
                      cursor: "pointer",
                      opacity: 0,
                      animation: "fade-in 1s ease-in-out 12s forwards",
                    }}
                    onClick={() => {
                      window.open(
                        "https://api.whatsapp.com/send?phone=5493516152680",
                        "_blank"
                      );
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.cursor = "pointer";
                      e.target.nextElementSibling.style.color = "#87CEEB";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.cursor = "auto";
                      e.target.nextElementSibling.style.color = "black";
                    }}
                  />
                  <a
                    href="https://api.whatsapp.com/send?phone=5493516152680"
                    target="_blank"
                    className="button"
                    style={{
                      opacity: 0,
                      marginRight: "16px",
                      animation: "fade-in 1s ease-in-out 13s forwards",
                      transition: "color 0.3s ease",
                      color: "black",
                    }}
                    onMouseOver={(e) => {
                      e.target.style.color = "#87CEEB";
                      e.target.previousElementSibling.style.cursor = "pointer";
                    }}
                    onMouseOut={(e) => {
                      e.target.style.color = "black";
                      e.target.previousElementSibling.style.cursor = "auto";
                    }}
                  >
                    Ir a pagar
                  </a>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="chat-footer" style={styles.chatFooter}>
        <input
          style={styles.input}
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder={t("appTypeMessage")}
          disabled
        />
        <button onClick={handleSendMessage} style={styles.button} disabled>
          <Image
            alt="header text"
            src="/send.svg"
            className="object-cover"
            width={30}
            height={30}
          />
        </button>
      </div>
    </div>
  );
};

export default AppFeature;



// Styles
const styles = {
  sent: {
    margin: "10px 0",
    padding: "10px",
    borderRadius: "10px",
    backgroundColor: "#dcf8c6",
    alignSelf: "flex-end",
    marginRight: "10px",
  },
  received: {
    margin: "10px 0",
    padding: "10px",
    borderRadius: "10px",
    backgroundColor: "#ffffff",
    alignSelf: "flex-start",
    marginLeft: "10px",
  },
  chatBody: {
    display: "flex",
    flexDirection: "column",
    padding: "10px",
    overflowY: "auto",
  },
  chatFooter: {
    display: "flex",
    justifyContent: "space-around",
    padding: "10px",
    borderTop: "2px solid #ccc",
  },
  input: {
    padding: "19px",
    height: "40px",
    borderRadius: "10px",
    textAlign: "center",
    backgroundColor: "#ffffff",
  },
  button: {
    padding: "5px",
    height: "40px",
    borderRadius: "10px",
    backgroundColor: "#dcf8c6",
  },
};
