import { IconName } from "@/types/iconName";
import createIconSetFromIcoMoon from "@expo/vector-icons/createIconSetFromIcoMoon";
import { ThemeColors } from "../theme/theme";
import { useAppTheme } from "../theme/useAppTheme";

const IconFromIcoMoon = createIconSetFromIcoMoon(
  require("@/assets/icons/selection.json"),
  "IcoMoon",
  "icomoon.ttf",
);

type Props = {
  name: IconName;
  color?: ThemeColors;
  size?: number;
};

export const Icon = ({ name, color = "text", size = 32 }: Props) => {
  const { colors } = useAppTheme();

  return <IconFromIcoMoon name={name} size={size} color={colors[color]} />;
};
