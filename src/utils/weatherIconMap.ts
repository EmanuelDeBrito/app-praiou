import { IoniconsName } from "@/components/Icon";

const getIconByWeatherCode = (code: number): IoniconsName => {
  if (code === 0 || code === 1) {
    return "sunny-outline";
  }

  if (code <= 48) {
    return "cloudy-outline";
  }

  return "rainy-outline"; // Garoa, chuva ou trovoada (códigos 51 a 99)
};
