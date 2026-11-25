import { BeachType } from "@/types/beach";

export const beaches: BeachType[] = [
  {
    id: "praia-do-sonho",
    name: "Praia do Sonho",
    image: require("./images/praia/praia-sonho.jpg"),
    latitude: -24.1956,
    longitude: -46.8014,
    cidade: "itanhaem",
  },
  {
    id: "centro",
    name: "Praia do Centro",
    image: require("./images/praia/centro.jpg"),
    latitude: -24.1856,
    longitude: -46.7875,
    cidade: "itanhaem",
  },
  {
    id: "cibratel",
    name: "Cibratel",
    image: require("./images/praia/cibratel.jpg"),
    latitude: -24.2253,
    longitude: -46.8519,
    cidade: "itanhaem",
  },
];
