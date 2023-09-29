import AppScreen from "../components/AppScreen";
import { motion } from "framer-motion";
import Image from "next/image";

const MotionAppScreenHeader = motion(AppScreen.Header);
const MotionAppScreenBody = motion(AppScreen.Body);

const headerAnimation = {
  initial: { opacity: 0, transition: { duration: 0.3 } },
  animate: { opacity: 1, transition: { duration: 0.3, delay: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};
const maxZIndex = 2147483647;

const bodyVariantBackwards = {
  opacity: 0.4,
  scale: 0.8,
  zIndex: 0,
  filter: "blur(4px)",
  zIndex: 0,
  transition: { duration: 0.4 },
};

const bodyVariantForwards = (custom) => ({
  y: "100%",
  zIndex: maxZIndex - custom.changeCount,
  transition: { duration: 0.4 },
});
const bodyAnimation = {
  initial: "initial",
  animate: "animate",
  exit: "exit",
  variants: {
    initial: (custom) =>
      custom.isForwards ? bodyVariantForwards(custom) : bodyVariantBackwards,
    animate: (custom) => ({
      y: "0%",
      opacity: 1,
      scale: 1,
      zIndex: maxZIndex / 2 - custom.changeCount,
      filter: "blur(0px)",
      transition: { duration: 0.4 },
    }),
    exit: (custom) =>
      custom.isForwards ? bodyVariantBackwards : bodyVariantForwards(custom),
  },
};

function FirstScreen({ custom, animated = false }) {
  return (
    <AppScreen className="w-full">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Image
          alt="header text"
          src="/autonomous.svg"
          className="object-cover"
          width={300}
          height={300}
        />
      </div>
    </AppScreen>
  );
}
function SecondScreen({ custom, animated = false }) {
  return (
    <AppScreen className="w-full">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Image
          alt="header text"
          src="/support.svg"
          className="object-cover"
          width={300}
          height={300}
        />
      </div>
    </AppScreen>
  );
}

function ThirdScreen({ custom, animated = false }) {
  return (
    <AppScreen className="w-full">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Image
          alt="header text"
          src="/cheap.svg"
          className="object-cover"
          width={300}
          height={300}
        />
      </div>
    </AppScreen>
  );
}

function FourthScreen({ custom, animated = false }) {
  return (
    <AppScreen className="w-full">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Image
          alt="header text"
          src="/oneline.svg"
          className="object-cover"
          width={300}
          height={300}
        />
      </div>
    </AppScreen>
  );
}

export const features = [
  {
    name: "featureOneTitle",
    description: "featureOneSubtitle",
    icon: "/Elementos-2D-16.svg",
    screen: FirstScreen,
  },
  {
    name: "featureTwoTitle",
    description: "featureTwoSubtitle",
    icon: "/Elementos-2D-08.svg",
    screen: SecondScreen,
  },
  {
    name: "featureThreeTitle",
    description: "featureThreeSubtitle",
    icon: "/Elementos-2D-12.svg",
    screen: ThirdScreen,
  },
  {
    name: "featureFourTitle",
    description: "featureFourSubtitle",
    icon: "/Elementos-2D-06.svg",
    screen: FourthScreen,
  },
];
