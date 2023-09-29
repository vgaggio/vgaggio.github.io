"use client";
import Header from "../components/Header";
import "./globals.css";
import Footer from "../components/Footer";
import { appWithTranslation } from "next-i18next";
import "../../i18n";
import { metadata } from './metadata';
import Head from "next/head";

const DOMAIN = "https://bircle-aiwebsite.vercel.app";

function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <head>
        <meta property="og:logo" content={`${DOMAIN}/logo2.svg`}></meta>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:image" content={`${DOMAIN}/logo2.svg`}></meta>
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
