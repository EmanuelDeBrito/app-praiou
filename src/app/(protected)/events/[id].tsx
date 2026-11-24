import { Box } from "@/components/Box";
import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { NotFound } from "@/components/Not-Found";
import { SearchInput } from "@/components/Search-Input";
import { Header } from "@/containers/Header";
import { useDebounce } from "@/hooks/useDebounce";
import { useEvents } from "@/hooks/useEvents";
import { useAppTheme } from "@/theme/useAppTheme";
import { EventType } from "@/types/event";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { FlatList, ListRenderItemInfo } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const EventsScreen = () => {
  const { id } = useLocalSearchParams();

  const { spacing } = useAppTheme();
  const { top } = useSafeAreaInsets();
  const [event, setEvent] = useState("");

  const debouncedEvent = useDebounce(event);

  const { eventsList } = useEvents({
    beachId: id as string,
    eventName: debouncedEvent,
  });

  const renderItem = ({ item }: ListRenderItemInfo<EventType>) => {
    return (
      <Card
        id={item.id}
        name={item.name}
        image={item.image}
        href={`/(protected)/event/${item.id}`}
        pillList={item.pillList}
      />
    );
  };

  return (
    <Box flex={1} style={{ paddingTop: top }}>
      <Header />
      <Container>
        <FlatList
          data={eventsList}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            gap: spacing.s20,
          }}
          ListHeaderComponent={
            <SearchInput
              label="Pesquisar Praia"
              placeholder="Pesquise uma praia..."
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
