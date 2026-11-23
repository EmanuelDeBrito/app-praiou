import { Box } from "@/components/Box";
import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { SearchInput } from "@/components/Search-Input";
import { Header } from "@/containers/Header";
import { useCities } from "@/hooks/useCities";
import { useAppTheme } from "@/theme/useAppTheme";
import { CityType } from "@/types/city";
import { useScrollToTop } from "expo-router";
import { useRef, useState } from "react";
import { FlatList, ListRenderItemInfo } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const HomeScreen = () => {
  const { spacing } = useAppTheme();
  const { top } = useSafeAreaInsets();
  const [city, setCity] = useState("");

  const { cities } = useCities(city);

  const flatListRef = useRef(null);
  useScrollToTop(flatListRef);

  const renderItem = ({ item }: ListRenderItemInfo<CityType>) => {
    return <Card city={item} />;
  };

  return (
    <Box style={{ paddingTop: top }}>
      <Header />
      <Container>
        <FlatList
          ref={flatListRef}
          data={cities}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            gap: spacing.s20,
            paddingBottom: spacing.s65 + spacing.s65,
          }}
          ListHeaderComponent={
            <SearchInput
              label="Pesquisar Cidade"
              placeholder="Pesquise uma cidade..."
              value={city}
              onChangeText={setCity}
            />
          }
        />
      </Container>
    </Box>
  );
};

export default HomeScreen;
