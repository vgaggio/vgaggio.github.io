"use client";
import Header from "../components/Header";
import "./globals.css";
import Footer from "../components/Footer";
import { appWithTranslation } from "next-i18next";
import "../../i18n";
import { metadata } from './metadata';

function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta property="og:image" content="https://bircle-aiwebsite.vercel.app/logo2.svg" />
        <meta property="image" content="https://bircle-aiwebsite.vercel.app/logo2.svg" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
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
