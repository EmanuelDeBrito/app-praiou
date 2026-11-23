import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

const BeachScreen = () => {
  const { id } = useLocalSearchParams();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Cidade: {id}</Text>
    </View>
  );
};

export default BeachScreen;
