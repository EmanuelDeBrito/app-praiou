import { BottomSheet } from "@/components/Bottom-Sheet";
import { Box } from "@/components/Box";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Divider } from "@/components/Divider";
import { EventDetailsCreator } from "@/containers/Event-Details-Creator";
import { EventDetailsHeader } from "@/containers/Event-Details-Header";
import { EventDetailsInfo } from "@/containers/Event-Details-Info";
import { EventDetailsItems } from "@/containers/Event-Details-Items";
import { EventDetailsLocation } from "@/containers/Event-Details-Location";
import { EventDetailsOptions } from "@/containers/Event-Details-Options";
import { useEvent } from "@/hooks/useEvent";
import { useLocation } from "@/hooks/useLocation";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Text } from "react-native";
import MapView from "react-native-maps";
import { useSharedValue } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const EventScreen = () => {
  const { id } = useLocalSearchParams();
  const { top } = useSafeAreaInsets();
  const [isRegistered, setIsRegistered] = useState(false);
  const bottomSheetIsOpen = useSharedValue(false);

  const event = useEvent({ eventId: parseInt(id as string) });

  if (!event) {
    return (
      <Container flex={1} justifyContent={"center"} alignItems={"center"}>
        <Text>Evento não encontrado</Text>
      </Container>
    );
  }

  const toggleBottomSheetIsOpen = () => {
    bottomSheetIsOpen.value = !bottomSheetIsOpen.value;
  };

  const { latitude, longitude } = useLocation({ beachId: event.praia });

  return (
    <>
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
        {isRegistered && (
          <Box paddingHorizontal="s16">
            <Button label="Participar" onPress={() => {}} />
          </Box>
        )}
        {!isRegistered && (
          <EventDetailsOptions
            toggleBottomSheetIsOpen={toggleBottomSheetIsOpen}
          />
        )}
      </Container>
      <BottomSheet isOpen={bottomSheetIsOpen} onPress={toggleBottomSheetIsOpen}>
        <Box
          width={"100%"}
          height={500}
          borderTopLeftRadius="b25"
          borderTopRightRadius="b25"
          overflow={"hidden"}
        >
          <MapView
            style={{ flex: 1 }}
            initialRegion={{
              latitude: latitude as number,
              longitude: longitude as number,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            }}
          />
        </Box>
      </BottomSheet>
    </>
  );
};

export default EventScreen;
