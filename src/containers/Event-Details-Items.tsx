import { Box } from "@/components/Box";
import { EventInfoItem } from "@/components/Event-Info-Item";

type Props = {
  city: string;
  beach: string;
  date: string;
  hour: string;
  peopleQuantity: number;
};

export const EventDetailsItems = ({
  city,
  beach,
  date,
  hour,
  peopleQuantity,
}: Props) => {
  return (
    <Box
      flexDirection={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      gap="s20"
      paddingHorizontal="s16"
    >
      <EventInfoItem iconName="business-outline" label={city} />
      <EventInfoItem iconName="location-outline" label={beach} />
      <EventInfoItem iconName="calendar-clear-outline" label={date} />
      <EventInfoItem iconName="time-outline" label={hour} />
      <EventInfoItem iconName="person-outline" label={peopleQuantity} />
    </Box>
  );
};
