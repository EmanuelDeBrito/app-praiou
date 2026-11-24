import { events } from "@/data/events";

type Props = {
  beachId: string;
  eventName?: string;
};

export const useEvents = ({ beachId, eventName }: Props) => {
  let eventsList = [...events];

  eventsList = eventsList.filter((event) => {
    return event.praia === beachId;
  });

  if (eventName) {
    eventsList = eventsList.filter((event) => {
      return event.name.toLowerCase().includes(eventName.toLowerCase());
    });
  }

  return { eventsList };
};
