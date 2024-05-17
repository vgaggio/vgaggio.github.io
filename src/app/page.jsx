import Hero from "../components/collections/Hero";
import Feature from "../components/collections/Feature";
import Model from "../components/collections/Model";
import CallToAction from "../components/collections/CallToAction";
import HowItWorks from "../components/collections/HowItWorks";
import Pricing from "../components/collections/Pricing";
import BackedBy from "../components/collections/BackedBy";
import InterestedIn from "../components/collections/InterestedIn";
import TranslateButton from "../components/collections/TranslateButton";
import Vision from "../components/collections/Vision";
import Client from "../components/collections/Client";

function Home() {
  return (
    <main>
      <Hero />
      <TranslateButton />
      <Model />
      <Feature />
      <HowItWorks />
      <CallToAction />
      <Vision />
      <Client />
      <Pricing/>
      <BackedBy />
      <InterestedIn />
    </main>
  );
}

export default Home