import { Box } from "@/components/Box";
import { Text } from "@/components/Text";
import { useAppTheme } from "@/theme/useAppTheme";
import { Link, useRouter } from "expo-router";

const HomeScreen = () => {
  const router = useRouter();
  const { colors, spacing, textVariants } = useAppTheme();

  return (
    <Box backgroundColor="cardPrimaryBackground">
      <Link href={"/(protected)/event-details/4"}>Detalhes do Evento 4</Link>
      <Text onPress={() => router.navigate("/(protected)/event-details/5")}>
        Detalhes do Evento 5
      </Text>
    </Box>
  );
};

export default HomeScreen;
