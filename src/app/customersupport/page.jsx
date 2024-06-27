"use client";
import Model from "../../components/customersupport/Model";
import CallToAction from "../../components/customersupport/CallToAction";
import Feature from "../../components/customersupport/Feature";
import Hero from "../../components/customersupport/Hero";
import Reviews from "../../components/customersupport/Reviews";
import Pricing from "../../components/customersupport/Pricing";
import BackedBy from "../../components/customersupport/BackedBy";
import HowItWorks from "../../components/customersupport/HowItWorks";
import TranslateButton from "../../components/customersupport/TranslateButton";
import Header from "../../components/customersupport/Header";
import Footer from "../../components/customersupport/Footer";

function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <TranslateButton />
      <Feature />
      <Model />
      <CallToAction />
      <HowItWorks />
      <Pricing />
      <BackedBy />
      <Reviews />
      <Footer />
    </main>
  );
}

export default Home