import {
  DeviceArrowIcon,
  DeviceCardsIcon,
  DeviceClockIcon,
  DeviceListIcon,
  DeviceLockIcon,
  DeviceChartIcon,
} from "../components/StockLogos";

export const navData = [
  { _id: 101, title: "Home", href: "#home" },
  { _id: 102, title: "Features", href: "#features" },
  { _id: 103, title: "Model", href: "#model" },
  { _id: 104, title: "Reviews", href: "#reviews" },
];

export const modelData = [
  {
    name: "Customize base model properties",
    description:
      "GPT-3.5-Turbo and GPT-4 are supported with a variety of base models coming soon.",
    icon: DeviceArrowIcon,
  },
  {
    name: "Training through answer correction",
    description:
      "Correct the answers generated by the model and it will instantly learn from your feedback.",
    icon: DeviceCardsIcon,
  },
  {
    name: "Keep your data always updated",
    description:
      "Mendable reingestion process offers CRON jobs and webhooks to keep your data synced and always up to date.",
    icon: DeviceClockIcon,
  },
  {
    name: "Support Link",
    description:
      "Have customers redirected to your customer support link when the bot can't answer their questions.",
    icon: DeviceListIcon,
  },
  {
    name: "Privacy-first features",
    description:
      "BircleAI provides custom private, open source LLMs depending on your needs.",
    icon: DeviceLockIcon,
  },
  {
    name: "Custom prompt edits",
    description:
      "Edit the prompt to prevent hallucinations, maintain voice and format requirements.",
    icon: DeviceChartIcon,
  },
];

export const reviews = [
  {
    title: "Incredible!",
    body: "I started using this product, and within a week, our customer interactions have become much more efficient. The chatbots behave like humans, and our customers are delighted.",
    author: "Elena Martinez",
    rating: 5,
  },
  {
    title: "Amazing",
    body: "Our company has been using this tool to automate customer service, and it's made a significant difference. Now, we can serve more customers effectively and provide quick, accurate responses.",
    author: "Javier Gomez",
    rating: 5,
  },
  {
    title: "Time and Money Saver",
    body: "Implementing this product has allowed us to automate many customer interactions, freeing up time for our teams to focus on more strategic tasks. Additionally, we're seeing significant cost savings.",
    author: "Isabel Rodriguez",
    rating: 4,
  },
  {
    title: "Impressive",
    body: "Since we incorporated this solution into our marketing strategy, we've seen a noticeable increase in our conversions. The chatbots provide precise and personalized responses, which our customers appreciate.",
    author: "Carlos Lopez",
    rating: 5,
  },
  {
    title: "A Smart Investment",
    body: "This product has transformed the way we interact with customers. The chatbots have improved our customer service and are helping to boost our sales. Highly recommended!",
    author: "Maria Sanchez",
    rating: 5,
  },
  {
    title: "Efficiency to Another Level",
    body: "I can't believe how effective the chatbots in this product are. They have streamlined our customer communication, and we're seeing tangible results in terms of customer satisfaction and operational efficiency.",
    author: "Luis Torres",
    rating: 4,
  },
  {
    title: "Made My Job Easier",
    body: "As a sales representative, this tool has been a blessing. The chatbots help me qualify leads and provide quick responses, leading to higher conversion rates.",
    author: "Ana Garcia",
    rating: 5,
  },
  {
    title: "Enhancing the Customer Experience",
    body: "This product has greatly improved the customer experience in our company. The chatbots deliver instant and accurate responses, resulting in higher customer satisfaction.",
    author: "Diego Perez",
    rating: 5,
  },
];
