import { Link, useRouter } from "expo-router";
import { Text, View } from "react-native";

const HomeScreen = () => {
  const router = useRouter();

  return (
    <View>
      <Link href={"/(protected)/event-details/4"}>Detalhes do Evento 4</Link>
      <Text onPress={() => router.navigate("/(protected)/event-details/5")}>
        Detalhes do Evento 5
      </Text>
    </View>
  );
};

export default HomeScreen;
