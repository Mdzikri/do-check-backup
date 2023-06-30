import { ICoaching } from "../interface/coaching.interface";
import GraphUpIcon from "../assets/images/icons/circle-graph-up-icon.svg";
import BuildingIcon from "../assets/images/icons/circle-building-icon.svg";
import ChatIcon  from "../assets/images/icons/circle-chat-icon.svg";

export const coachingData: ICoaching[] = [
  {
    id: 0,
    icon: GraphUpIcon,
    name: "Initial Consultation",
    isPopular: false,
    price: 400000,
    denomination: "Appointment",
    description:
      "The coach will begin to map out the client's initial story to form an initial assessment.",
  },
  {
    id: 1,
    icon: BuildingIcon,
    name: "Enterprise Consultation",
    isPopular: true,
    price: null,
    denomination: null,
    description:
      "Advanced analysis of the results (The Initial & Advanced Consultation) in order to obtain a total DMHP",
  },
  {
    id: 2,
    icon: ChatIcon,
    name: "Advanced Consultation",
    isPopular: false,
    price: 1200000,
    denomination: "Appointment",
    description:
      "The results of Initial Consultation will be explored more deeply so the result can be more accurate.",
  },
];
