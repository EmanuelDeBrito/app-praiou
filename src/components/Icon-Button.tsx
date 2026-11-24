import { ThemeColors } from "@/theme/theme";
import { Pressable } from "react-native";
import { Box } from "./Box";
import { Icon, IoniconsName } from "./Icon";

type Props = {
  iconName: IoniconsName;
  iconColor?: ThemeColors;
  iconSize?: number;
  onPress: () => void;
};

export const IconButton = ({
  iconName,
  iconColor = "text",
  iconSize = 24,
  onPress,
}: Props) => {
  return (
    <Pressable onPress={onPress}>
      <Box
        justifyContent={"center"}
        alignItems={"center"}
        padding="s6"
        backgroundColor="background"
        borderRadius="rounded"
      >
        <Icon name={iconName} color={iconColor} size={iconSize} />
      </Box>
    </Pressable>
  );
};
