export type EventType = {
  id: number;
  name: string;
  image: number;
  description: string;
  creator: string;
  cityName: string;
  beachName: string;
  date: string;
  hour: string;
  peopleQuantity: number;
  latitude: number;
  longitude: number;
  pillList: string[];
  praia: string;
  participants: number[];
  creatorId: number;
};

export type EventPreview = Pick<
  EventType,
  "id" | "name" | "image" | "pillList"
>;
