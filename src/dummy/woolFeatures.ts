import { IWoolFeatures } from "../interface/wool-features.interface";
import Profile from "../assets/images/icons/profile-icon.png";
import Journal from "../assets/images/icons/journaling-icon.png";
import Career from "../assets/images/icons/career-icon.png";
import Evaluation from "../assets/images/icons/evaluation-icon.png";

export const woolFeaturesData: IWoolFeatures[] = [
  {
    id: 0,
    title: "Personality Profilling",
    description:
      "Recognize yourself in mapping the narrative spectrum of present mental health states with the modern Enneagram method",
    image: Profile,
  },
  {
    id: 1,
    title: "Smart journaling",
    description:
      "Mental health problems cause each employee to lose 27 days of work per year",
    image: Journal,
  },
  {
    id: 2,
    title: "Career Coaching",
    description:
      "And if she hasn’t been rewritten, then they are still using her.",
    image: Career,
  },
  {
    id: 3,
    title: "Career Evaluation",
    description:
      "And if she hasn’t been rewritten, then they are still using her.",
    image: Evaluation,
  },
];
