import { IProblem } from "../interface/problem.interface";
import Calendar from "../assets/images/icons/calendar.png";
import Concentrate from "../assets/images/icons/concentrate.png";
import Task from "../assets/images/icons/task.png";

export const problemData: IProblem[] = [
  {
    id: 0,
    title: "Unproductive Employees",
    description:
      "Riset dari Gallup, inc. melaporkan bahwa 76% karyawan di Indonesia tidak termotivasi dengan pekerjaan mereka",
    image: Concentrate,
  },
  {
    id: 1,
    title: "Target was not achieved",
    description:
      "Mental health problems cause each employee to lose 27 days of work per year",
    image: Calendar,
  },
  {
    id: 2,
    title: "Well Organized",
    description:
      "And if she hasn't been rewritten then they are still using her.",
    image: Task,
  },
];
