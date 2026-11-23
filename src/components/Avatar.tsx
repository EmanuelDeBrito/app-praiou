import { useAppTheme } from "@/theme/useAppTheme";
import { Image } from "react-native";
import { Box } from "./Box";
import { Text } from "./Text";

type Props = {
  image: string;
  name: string;
};

export const Avatar = ({ image, name }: Props) => {
  const { borderRadii } = useAppTheme();

  return (
    <Box flexDirection={"row"} alignItems={"center"} gap="s10">
      <Image
        style={{
          width: 40,
          height: 40,
          borderRadius: borderRadii.rounded,
        }}
        source={require("@/data/images/avatar/avatar.jpg")}
        resizeMode="cover"
      />
      <Text variant="text16">{name}</Text>
    </Box>
  );
};
