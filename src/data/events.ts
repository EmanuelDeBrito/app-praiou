import { EventType } from "@/types/event";

export const events: EventType[] = [
  {
    id: 1,
    name: "Futebol",
    image: require("./images/eventos/futebol.jpg"),
    pillList: ["03/11", "18:00", "6 pessoas"],
    praia: "praia-do-sonho",
  },
  {
    id: 2,
    name: "Vôlei",
    image: require("./images/eventos/volei.jpg"),
    pillList: ["03/11", "16:00", "4 pessoas"],
    praia: "praia-do-sonho",
  },
  {
    id: 3,
    name: "Corrida",
    image: require("./images/eventos/corrida.jpg"),
    pillList: ["03/11", "14:00", "2 pessoas"],
    praia: "praia-do-sonho",
  },
];
