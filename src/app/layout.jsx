"use client";
import Header from "../components/customersupport/Header";
import "./globals.css";
import Footer from "../components/customersupport/Footer";
import { appWithTranslation } from "next-i18next";
import "../../i18n";
import { metadata } from './metadata';

function RootLayout({ children }) {
const DOMAIN = "https://bircle.ai";
  return (
    <html lang="en">
      <head>
        <meta property="og:logo" content={`${DOMAIN}/BircleAI.png`}></meta>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:image" content={`${DOMAIN}/BircleAI.png`}></meta>
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

export default appWithTranslation(RootLayout);
