import { Card } from "@/components/Card";
import { Climate } from "@/components/Climate";
import { Container } from "@/components/Container";
import { cities } from "@/data/cities";
import { useAppTheme } from "@/theme/useAppTheme";
import { CityType } from "@/types/city";
import { useScrollToTop } from "expo-router";
import { useRef } from "react";
import { FlatList, ListRenderItemInfo } from "react-native";

const HomeScreen = () => {
  const { spacing } = useAppTheme();

  const flatListRef = useRef(null);
  useScrollToTop(flatListRef);

  const renderItem = ({ item }: ListRenderItemInfo<CityType>) => {
    return <Card city={item} />;
  };

  return (
    <Container>
      <Climate />
      <FlatList
        ref={flatListRef}
        data={cities}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ gap: spacing.s20 }}
      />
    </Container>
  );
};

export default HomeScreen;
