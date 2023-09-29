"use client";
import Header from "../components/Header";
import "./globals.css";
import Footer from "../components/Footer";
import { appWithTranslation } from "next-i18next";
import "../../i18n";
import { metadata } from './metadata';

function RootLayout({ children }) {
const DOMAIN = "https://bircle-aiwebsite.vercel.app";
  return (
    <html lang="en">
      <head>
        <meta property="og:logo" content={`${DOMAIN}/forma-NEGRO.png`}></meta>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:image" content={`${DOMAIN}/forma-NEGRO.png`}></meta>
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
