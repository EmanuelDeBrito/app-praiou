import { events } from "@/data/events";

export const useMyEvents = (userId: number) => {
  const myEvents = events.filter((item) => item.creatorId === userId);

  return { myEvents };
};
