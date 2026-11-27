import { events } from "@/data/events";

type Props = {
  userId: number;
  eventName?: string;
};

export const useMyInscriptions = ({ userId, eventName }: Props) => {
  let myInscriptionsList = [...events];

  myInscriptionsList = events.filter((item) => {
    return item.participants.includes(userId);
  });

  if (eventName) {
    myInscriptionsList = myInscriptionsList.filter((event) => {
      return event.name.toLowerCase().includes(eventName.toLowerCase());
    });
  }

  return { myInscriptionsList };
};
