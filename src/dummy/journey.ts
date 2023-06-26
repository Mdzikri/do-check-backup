import { IJourney } from "../interface/journey.interface";
import WoolLogo from "../assets/images/logo-blue.png";
import DoZine from "../assets/images/do-zine-illustration-1.png";
import DoCheck from "../assets/images/do-check-illustration-1.png";

export const journeyData: IJourney[] = [
  {
    id: 0,
    time: 2023,
    description:
      "In 2023, a digital mental health platform named Wool (We Open Our Lives) was born, to focus on improving the mental health of Millennials and Generation Z.",
    illustration: WoolLogo,
  },
  {
    id: 1,
    time: 2022,
    description:
      "In 2022, DoZine was created as a digital magazine platform, specifically for Millennials and Generation Z to be able to share knowledge, lifestyle, and work.",
    illustration: DoZine,
  },
  {
    id: 2,
    time: 2021,
    description:
      "In 2021, the DoCheck digital platform was born to actively share todo lists with the hope that Millennials and Generation Z can increase productivity with the DoCheck platform and share tacit knowledge with each other",
    illustration: DoCheck,
  },
];
