import { Container } from "@/components/Container";
import { useLocalSearchParams } from "expo-router";
import { Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const EventScreen = () => {
  const { id } = useLocalSearchParams();
  const { top } = useSafeAreaInsets();

  return (
    <Container style={{ paddingTop: top, paddingHorizontal: 0 }}>
      <Text>{id}</Text>
    </Container>
  );
};

export default EventScreen;
