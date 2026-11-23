import { cities } from "@/data/cities";

export const useCities = (city: string) => {
  console.log({ city });

  return { cities };
};
