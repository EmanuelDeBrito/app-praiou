import { useAppTheme } from "@/theme/useAppTheme";
import { CityType } from "@/types/city";
import { ImageBackground } from "react-native";
import { Box } from "./Box";
import { Text } from "./Text";

type Props = {
  city: CityType;
};

export const Card = ({ city }: Props) => {
  const { borderRadii } = useAppTheme();

  return (
    <ImageBackground
      source={city.image}
      style={{ width: "100%", height: 220 }}
      imageStyle={{ borderRadius: borderRadii.b10 }}
    >
      <Box
        position={"absolute"}
        width={"100%"}
        height={"100%"}
        backgroundColor="gray"
        borderRadius="b10"
        opacity={0.35}
      />
      <Box flex={1} justifyContent={"flex-end"} padding="s16">
        <Text variant="title30">{city.name}</Text>
      </Box>
    </ImageBackground>
  );
};
