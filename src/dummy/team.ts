import { DepartmentEnum, ITeam } from "../interface/team.interface";
import Roy from "../assets/images/teams/roy-adhie.png";
import Faishal from "../assets/images/teams/faishal-wahiduddin.png";
import Astrid from "../assets/images/teams/astrid-gabriella.png";
import Derry from "../assets/images/teams/derry-nugraha.png";
import Risky from "../assets/images/teams/riski-abdul-kholiq.png";
import Septian from "../assets/images/teams/septian-pramitra.png";
import Sri from "../assets/images/teams/sri-sulistiawati.png";

export const teamData: ITeam[] = [
  {
    id: 0,
    name: "Roy Adhie",
    position: "Main Commissioner",
    department: DepartmentEnum.LEADER,
    photo: Roy,
  },
  {
    id: 1,
    name: "Faishal Wahiduddin",
    position: "Chief Technology Officer",
    department: DepartmentEnum.PRODUCT,
    photo: Faishal,
  },
  {
    id: 2,
    name: "Astrid Gabriella",
    position: "Chief Marketing Officer",
    department: DepartmentEnum.MARKETING,
    photo: Astrid,
  },
  {
    id: 3,
    name: "Derry Nugraha",
    position: "Social Media Strategist",
    department: DepartmentEnum.MARKETING,
    photo: Derry,
  },
  {
    id: 4,
    name: "Riski Abdul Kholiq",
    position: "Creative Designer",
    department: DepartmentEnum.MARKETING,
    photo: Risky,
  },
  {
    id: 5,
    name: "Septian Pramitra",
    position: "Video Editor",
    department: DepartmentEnum.MARKETING,
    photo: Septian,
  },
  {
    id: 6,
    name: "Sri Sulistiawati",
    position: "Finance Staf",
    department: DepartmentEnum.OFFICE,
    photo: Sri,
  },
];
