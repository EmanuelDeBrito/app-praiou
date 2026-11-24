export type EventType = {
  id: number;
  name: string;
  image: number;
  description: string;
  criador: string;
  cityName: string;
  beachName: string;
  date: string;
  hour: string;
  peopleQuantity: number;
  latitude: number;
  longitude: number;
  pillList: string[];
  praia: string;
};

export type EventPreview = Pick<
  EventType,
  "id" | "name" | "image" | "pillList"
>;
