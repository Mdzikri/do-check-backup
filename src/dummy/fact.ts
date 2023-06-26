import { IFact } from "../interface/fact.interface";
import Stresshed1 from "../assets/images/stresshed.png";
import Stresshed2 from "../assets/images/stresshed-2.png";

export const factData: IFact[] = [
  {
    id: 0,
    author: "-Mercer Marsh Benefits",
    quotes:
      "37 percent of Indonesian employess experience mental health problems (stress) on a daily basis.",
    illustration: Stresshed1,
  },
  {
    id: 1,
    author: "-Kata Data",
    quotes:
      "The positive impact of a supportive work environment correlates between support for mental health at work, stress levels, and employee anxiety. Therefore, it is important for companies to support the mental health of their employees (Gen Z & Millennials).",
    illustration: Stresshed2,
  },
];
