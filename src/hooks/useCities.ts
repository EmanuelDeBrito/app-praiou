import { cities } from "@/data/cities";

type Props = {
  cityName?: string;
};

export const useCities = ({ cityName }: Props) => {
  let citiesList = [...cities];

  if (cityName) {
    citiesList = citiesList.filter((city) => {
      return city.name.toLowerCase().includes(cityName.toLowerCase());
    });
  }

  return { citiesList };
};
