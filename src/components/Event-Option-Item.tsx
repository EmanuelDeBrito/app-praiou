import { ThemeColors } from "@/theme/theme";
import { Pressable } from "react-native";
import { Box } from "./Box";
import { Icon, IoniconsName } from "./Icon";
import { Text } from "./Text";

type Props = {
  label: string;
  iconName: IoniconsName;
  iconColor?: ThemeColors;
  iconSize?: number;
  exit?: boolean;
  onPress: () => void;
};

export const EventOptionItem = ({
  label,
  iconName,
  iconColor = "text",
  iconSize = 24,
  exit,
  onPress,
}: Props) => {
  return (
    <Pressable onPress={onPress}>
      <Box flexDirection={"row"} alignItems={"center"} gap="s10">
        <Box
          justifyContent={"center"}
          alignItems={"center"}
          padding="s10"
          backgroundColor={exit ? "error" : "yellow1"}
          borderRadius="rounded"
        >
          <Icon name={iconName} color={iconColor} size={iconSize} />
        </Box>
        <Text variant="text15">{label}</Text>
      </Box>
    </Pressable>
  );
};
