import Model from "../components/Model";
import CallToAction from "../components/CallToAction";
import Feature from "../components/Feature";
import Hero from "../components/Hero";
import Reviews from "../components/Reviews";
import Pricing from "../components/Pricing";
import BackedBy from "../components/BackedBy";

function Home() {
  return (
    <main>
      <Hero />
      <Feature />
      <Model />
      <CallToAction />
      <Pricing />
      <BackedBy />
      <Reviews />
    </main>
  );
}

export default Home