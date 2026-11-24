import { ThemeColors } from "@/theme/theme";
import { useAppTheme } from "@/theme/useAppTheme";
import { Box } from "./Box";
import { Icon, IoniconsName } from "./Icon";
import { Text } from "./Text";

type Props = {
  label: string | number;
  iconName: IoniconsName;
  iconColor?: ThemeColors;
  iconSize?: number;
};

export const EventInfoItem = ({
  label,
  iconName,
  iconColor = "text",
  iconSize = 32,
}: Props) => {
  const { opacity } = useAppTheme();

  return (
    <Box
      flex={1}
      justifyContent={"center"}
      alignItems={"center"}
      gap="s6"
      paddingVertical="s10"
      paddingHorizontal="s4"
      borderWidth={1}
      borderRadius="b5"
      style={{
        borderColor: opacity.eventInfoItem,
      }}
    >
      <Icon name={iconName} color={iconColor} size={iconSize} />
      <Text variant="text12" textAlign="center" numberOfLines={1}>
        {label}
      </Text>
    </Box>
  );
};
