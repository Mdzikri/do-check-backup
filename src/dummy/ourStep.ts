import { IOurStep } from "../interface/ourStep.interface";
import Initial from "../assets/images/steps/initial-illustration.png";
import Treatment from "../assets/images/steps/treatment-illustration.png";
import Outcome from "../assets/images/steps/outcome-illustration.png";

export const ourStepData: IOurStep[] = [
  {
    id: 0,
    title: "Initial Assesment",
    content:
      "Answer questions to suit your needs and preferences. All data is stored in a secure place",
    image: Initial,
  },
  {
    id: 1,
    title: "Treatment",
    content:
      "Utilize all Wool’s solutions (profilling, smart journaling, and couching/consultation) as required",
    image: Treatment,
  },
  {
    id: 2,
    title: "Outcome",
    content:
      "Digital Mental Health Progress  (DMHP) Reports are created and provided to employees  and companies along with advice for future development",
    image: Outcome,
  },
];
