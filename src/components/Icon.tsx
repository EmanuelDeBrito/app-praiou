import Ionicons from "@expo/vector-icons/Ionicons";
import { ComponentProps } from "react";
import { ThemeColors } from "../theme/theme";
import { useAppTheme } from "../theme/useAppTheme";

export type IoniconsName = ComponentProps<typeof Ionicons>["name"];

type Props = {
  name: IoniconsName;
  color?: ThemeColors;
  size?: number;
};

export const Icon = ({ name, color = "text", size = 32 }: Props) => {
  const { colors } = useAppTheme();

  return <Ionicons name={name} size={size} color={colors[color]} />;
};
