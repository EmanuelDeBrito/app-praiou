import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { Icon } from "@/components/Icon";
import { cities } from "@/data/cities";
import { CityType } from "@/types/city";
import { FlatList, ListRenderItemInfo } from "react-native";

const HomeScreen = () => {
  const renderItem = ({ item }: ListRenderItemInfo<CityType>) => {
    return <Card city={item} />;
  };

  return (
    <Container>
      <Icon name="aceitar" />
      <FlatList data={cities} renderItem={renderItem} />
    </Container>
  );
};

export default HomeScreen;
