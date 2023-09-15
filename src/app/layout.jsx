import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "BircleAI",
  description: "Generate your dream chat in seconds.",
};

export default function RootLayout({ children }) {
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
