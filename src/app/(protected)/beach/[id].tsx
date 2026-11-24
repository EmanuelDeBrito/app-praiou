import { Box } from "@/components/Box";
import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { NotFound } from "@/components/Not-Found";
import { SearchInput } from "@/components/Search-Input";
import { Header } from "@/containers/Header";
import { useBeaches } from "@/hooks/useBeaches";
import { useDebounce } from "@/hooks/useDebounce";
import { useAppTheme } from "@/theme/useAppTheme";
import { BeachType } from "@/types/beach";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { FlatList, ListRenderItemInfo } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const BeachScreen = () => {
  const { id } = useLocalSearchParams();

  const { spacing } = useAppTheme();
  const { top } = useSafeAreaInsets();
  const [beach, setBeach] = useState("");

  const debouncedBeach = useDebounce(beach);

  const { beachesList } = useBeaches({
    cityId: id as string,
    beachName: debouncedBeach,
  });

  const renderItem = ({ item }: ListRenderItemInfo<BeachType>) => {
    return (
      <Card
        id={item.id}
        name={item.name}
        image={item.image}
        href={`/(protected)/events/${item.id}`}
      />
    );
  };

  return (
    <Box flex={1} style={{ paddingTop: top }}>
      <Header />
      <Container>
        <FlatList
          data={beachesList}
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
              value={beach}
              onChangeText={setBeach}
            />
          }
          ListEmptyComponent={<NotFound label="Nenhuma praia encontrada..." />}
        />
      </Container>
    </Box>
  );
};

export default BeachScreen;
