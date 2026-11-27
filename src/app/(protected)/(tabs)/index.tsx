import { Box } from "@/components/Box";
import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { NotFound } from "@/components/Not-Found";
import { SearchInput } from "@/components/Search-Input";
import { Header } from "@/containers/Header";
import { useCities } from "@/hooks/useCities";
import { useDebounce } from "@/hooks/useDebounce";
import { useAppTheme } from "@/theme/useAppTheme";
import { CityType } from "@/types/city";
import { useScrollToTop } from "expo-router";
import { useRef, useState } from "react";
import { FlatList, ListRenderItemInfo } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const HomeScreen = () => {
  const { spacing } = useAppTheme();
  const { top, bottom } = useSafeAreaInsets();
  const [city, setCity] = useState("");

  const debouncedCity = useDebounce(city);

  const { citiesList } = useCities({ cityName: debouncedCity });

  const flatListRef = useRef(null);
  useScrollToTop(flatListRef);

  const renderItem = ({ item }: ListRenderItemInfo<CityType>) => {
    return (
      <Card
        id={item.id}
        name={item.name}
        image={item.image}
        href={`/(protected)/beach/${item.id}`}
      />
    );
  };

  return (
    <Box flex={1} style={{ paddingTop: top }}>
      <Header />
      <Container>
        <FlatList
          ref={flatListRef}
          data={citiesList}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            gap: spacing.s20,
            paddingBottom: bottom,
          }}
          ListHeaderComponent={
            <SearchInput
              label="Pesquisar Cidade"
              placeholder="Pesquise uma cidade..."
              value={city}
              onChangeText={setCity}
            />
          }
          ListEmptyComponent={<NotFound label="Nenhuma cidade encontrada..." />}
        />
      </Container>
    </Box>
  );
};

export default HomeScreen;
