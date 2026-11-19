import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

const EventDetailsScreen = () => {
  const { id } = useLocalSearchParams();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Id Evento: {id}</Text>
    </View>
  );
};

export default EventDetailsScreen;
