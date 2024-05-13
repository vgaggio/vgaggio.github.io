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
    <html lang="es" className="scroll-smooth">
      <head>
        <meta property="og:logo" content={`${DOMAIN}/BircleAI.png`}></meta>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:image" content={`${DOMAIN}/BircleAI.png`}></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"></meta>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA_TRACKING_ID"></script>
        <script
            dangerouslySetInnerHTML={{
                 __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'YOUR_GA_TRACKING_ID');
                 `,
              }}
           />
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
