import { Box } from "@/components/Box";
import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { NotFound } from "@/components/Not-Found";
import { SearchInput } from "@/components/Search-Input";
import { Tabs } from "@/components/Tabs";
import { useDebounce } from "@/hooks/useDebounce";
import { useMyEvents } from "@/hooks/useMyEvents";
import { useMyInscriptions } from "@/hooks/useMyInscriptions";
import { useAppTheme } from "@/theme/useAppTheme";
import { EventPreview } from "@/types/event";
import { useState } from "react";
import { ListRenderItemInfo } from "react-native";
import Animated, { FadingTransition } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const EventsScreen = () => {
  const { spacing } = useAppTheme();
  const { top, bottom } = useSafeAreaInsets();
  const [event, setEvent] = useState("");
  const [tabSelected, setTabSelected] = useState("Meus Eventos");

  const debouncedEvent = useDebounce(event);

  const { myEventsList } = useMyEvents({
    userId: 1,
    eventName: debouncedEvent,
  });

  const { myInscriptionsList } = useMyInscriptions({
    userId: 1,
    eventName: debouncedEvent,
  });

  const renderItem = ({ item }: ListRenderItemInfo<EventPreview>) => {
    return (
      <Card
        id={item.id}
        name={item.name}
        image={item.image}
        href={`/(protected)/event-details/${item.id}`}
        pillList={item.pillList}
      />
    );
  };

  return (
    <Box flex={1} style={{ paddingTop: top }}>
      <Tabs
        tabSelected={tabSelected}
        firstTabLabel="Meus Eventos"
        secondTabLabel="Minhas Inscrições"
        onPress={setTabSelected}
      />
      <Container>
        <Animated.FlatList
          itemLayoutAnimation={FadingTransition.duration(400)}
          data={
            tabSelected === "Meus Eventos" ? myEventsList : myInscriptionsList
          }
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            gap: spacing.s20,
            paddingBottom: bottom,
          }}
          ListHeaderComponent={
            <SearchInput
              label="Pesquisar Evento"
              placeholder="Pesquise um evento..."
              value={event}
              onChangeText={setEvent}
            />
          }
          ListEmptyComponent={<NotFound label="Nenhum evento encontrado..." />}
        />
      </Container>
    </Box>
  );
};

export default EventsScreen;
