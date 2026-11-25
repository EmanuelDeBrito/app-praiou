import { beaches } from "@/data/beaches";

type Props = {
  beachId: string;
};

export const useLocations = ({ beachId }: Props) => {
  let beach = beaches.find((beach) => beach.id === beachId);

  let latitude = beach?.latitude;
  let longitude = beach?.longitude;

  return {
    latitude,
    longitude,
  };
};
