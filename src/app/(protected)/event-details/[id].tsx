import { Container } from "@/components/Container";
import { Divider } from "@/components/Divider";
import { EventDetailsCreator } from "@/containers/Event-Details-Creator";
import { EventDetailsHeader } from "@/containers/Event-Details-Header";
import { EventDetailsInfo } from "@/containers/Event-Details-Info";
import { EventDetailsItems } from "@/containers/Event-Details-Items";
import { EventDetailsLocation } from "@/containers/Event-Details-Location";
import { useEvent } from "@/hooks/useEvent";
import { useLocalSearchParams } from "expo-router";
import { Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const EventScreen = () => {
  const { id } = useLocalSearchParams();
  const { top } = useSafeAreaInsets();

  const event = useEvent({ eventId: parseInt(id as string) });

  if (!event) {
    return (
      <Container flex={1} justifyContent={"center"} alignItems={"center"}>
        <Text>Evento não encontrado</Text>
      </Container>
    );
  }

  return (
    <Container style={{ paddingTop: top, paddingHorizontal: 0 }} scrollable>
      <EventDetailsHeader
        name={event.name}
        image={event.image}
        city={event.cityName}
        beach={event.beachName}
        date={event.date}
        hour={event.hour}
      />
      <EventDetailsInfo name={event.name} description={event.description} />
      <Divider paddingHorizontal="s16" />
      <EventDetailsCreator creator={event.creator} />
      <Divider paddingHorizontal="s16" />
      <EventDetailsItems
        city={event.cityName}
        beach={event.beachName}
        date={event.date}
        hour={event.hour}
        peopleQuantity={event.peopleQuantity}
      />
      <Divider paddingHorizontal="s16" />
      <EventDetailsLocation beachId={event.praia} />
      <Divider paddingHorizontal="s16" />
    </Container>
  );
};

export default EventScreen;
