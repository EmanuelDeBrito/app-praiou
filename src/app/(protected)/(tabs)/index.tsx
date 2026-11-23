import { Box } from "@/components/Box";
import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { cities } from "@/data/cities";
import { useAppTheme } from "@/theme/useAppTheme";
import { CityType } from "@/types/city";
import { useScrollToTop } from "expo-router";
import { useRef } from "react";
import { FlatList, ListRenderItemInfo } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const HomeScreen = () => {
  const { spacing } = useAppTheme();
  const { top } = useSafeAreaInsets();

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
          }}
        />
      </Container>
    </Box>
  );
};

export default HomeScreen;
