import { Container } from "@/components/Container";
import { EventDetailsHeader } from "@/containers/Event-Details-Header";
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
    <Container style={{ paddingTop: top, paddingHorizontal: 0 }}>
      <EventDetailsHeader
        name={event.name}
        image={event.image}
        city={event.cityName}
        beach={event.beachName}
        date={event.date}
        hour={event.hour}
      />
    </Container>
  );
};

export default EventScreen;
