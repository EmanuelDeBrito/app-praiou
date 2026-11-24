import { events } from "@/data/events";

type Props = {
  eventId: number;
};

export const useEvent = ({ eventId }: Props) => {
  let evento = events.find((evento) => evento.id === eventId);

  return evento;
};
