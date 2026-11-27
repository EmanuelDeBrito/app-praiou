import { events } from "@/data/events";

type Props = {
  userId: number;
  eventName?: string;
};

export const useMyEvents = ({ userId, eventName }: Props) => {
  let myEventsList = [...events];

  myEventsList = events.filter((item) => {
    return item.creatorId === userId;
  });

  if (eventName) {
    myEventsList = myEventsList.filter((event) => {
      return event.name.toLowerCase().includes(eventName.toLowerCase());
    });
  }

  return { myEventsList };
};
