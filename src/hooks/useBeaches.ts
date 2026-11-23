import { beaches } from "@/data/beaches";

type Props = {
  cityId: string;
  beachName?: string;
};

export const useBeaches = ({ cityId, beachName }: Props) => {
  let beachesList = [...beaches];

  beachesList = beachesList.filter((beach) => {
    return beach.cidade === cityId;
  });

  if (beachName) {
    beachesList = beachesList.filter((beach) => {
      return beach.name.toLowerCase().includes(beachName.toLowerCase());
    });
  }

  return { beachesList };
};
