import { Container } from "@/components/Container";
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
      <Text>{event.name}</Text>
    </Container>
  );
};

export default EventScreen;
