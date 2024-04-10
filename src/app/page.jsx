import Hero from "../components/collections/Hero";
import Feature from "../components/collections/Feature";
import Model from "../components/collections/Model";
import CallToAction from "../components/collections/CallToAction";
import HowItWorks from "../components/collections/HowItWorks";
import Pricing from "../components/collections/Pricing";
import BackedBy from "../components/collections/BackedBy";
import InterestedIn from "../components/collections/InterestedIn";
import TranslateButton from "../components/collections/TranslateButton";

function Home() {
  return (
    <main>
      <Hero />
      <TranslateButton />
      <Model />
      <Feature />
      <HowItWorks />
      <CallToAction />
      <Pricing />
      <BackedBy />
      <InterestedIn />
    </main>
  );
}

export default Home