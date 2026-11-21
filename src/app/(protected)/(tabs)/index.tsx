import { Box } from "@/components/Box";
import { Card } from "@/components/Card";
import { cities } from "@/data/cities";
import { CityType } from "@/types/city";
import { FlatList, ListRenderItemInfo } from "react-native";

const HomeScreen = () => {
  const renderItem = ({ item }: ListRenderItemInfo<CityType>) => {
    return <Card city={item} />;
  };

  return (
    <Box flex={1} backgroundColor="cardPrimaryBackground">
      <FlatList data={cities} renderItem={renderItem} />
    </Box>
  );
};

export default HomeScreen;
