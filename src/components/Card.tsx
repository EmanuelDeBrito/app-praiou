import { useAppTheme } from "@/theme/useAppTheme";
import { CityType } from "@/types/city";
import { ImageBackground } from "react-native";
import { Box } from "./Box";
import { Pill } from "./Pill";
import { Text } from "./Text";

type Props = {
  city: CityType;
  info?: string[];
};

export const Card = ({ city, info }: Props) => {
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
        {info && (
          <Box flexDirection={"row"} alignItems={"center"} gap="s10" mt="s10">
            {info.map((item, key) => (
              <Pill key={key} label={item} />
            ))}
          </Box>
        )}
      </Box>
    </ImageBackground>
  );
};
