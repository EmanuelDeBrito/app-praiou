import { useAppTheme } from "@/theme/useAppTheme";
import { Href, Link } from "expo-router";
import { ImageBackground, Pressable } from "react-native";
import { Box } from "./Box";
import { Pill } from "./Pill";
import { Text } from "./Text";

type Props = {
  id: string;
  name: string;
  image: number;
  href: Href;
  pillList?: string[];
};

export const Card = ({ id, name, image, href, pillList }: Props) => {
  const { borderRadii } = useAppTheme();

  return (
    <Link href={href} asChild>
      <Pressable>
        <ImageBackground
          source={image}
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
            <Text variant="title30">{name}</Text>
            {pillList && (
              <Box
                flexDirection={"row"}
                alignItems={"center"}
                gap="s10"
                mt="s10"
              >
                {pillList.map((item, key) => (
                  <Pill key={key} label={item} />
                ))}
              </Box>
            )}
          </Box>
        </ImageBackground>
      </Pressable>
    </Link>
  );
};
