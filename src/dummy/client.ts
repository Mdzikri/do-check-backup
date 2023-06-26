import { IClient } from "../interface/client.interface";
import Pertamina from "../assets/images/clients/pertamina.png";
import Telkom from "../assets/images/clients/telkom.png";
import PLN from "../assets/images/clients/pln.png";
import Shell from "../assets/images/clients/shell.png";
import Kuncie from "../assets/images/clients/kuncie.png";
import BukuWarung from "../assets/images/clients/buku-warung.png";

export const clientData: IClient[] = [
  {
    id: 0,
    name: "Pertamina",
    image: Pertamina,
  },
  {
    id: 1,
    name: "Telkom",
    image: Telkom,
  },
  {
    id: 2,
    name: "PLN",
    image: PLN,
  },
  {
    id: 3,
    name: "Shell",
    image: Shell,
  },
];

export const corporateClientData: IClient[] = [
  {
    id: 0,
    name: "Kuncie",
    image: Kuncie,
  },
  {
    id: 1,
    name: "Buku Warung",
    image: BukuWarung,
  },
];
