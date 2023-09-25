"use client";
import Header from "../components/Header";
import "./globals.css";
import Footer from "../components/Footer";
import LogoBlack from "../components/LogoBlack";
import { appWithTranslation } from "next-i18next";

// export const metadata = {
//   image: <LogoBlack />,
//   title: "BircleAI",
//   description: "Generate your dream chat in seconds.",
// };

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

export default appWithTranslation(RootLayout);
