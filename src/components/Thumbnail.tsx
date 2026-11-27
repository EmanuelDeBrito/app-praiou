import { useAppTheme } from "@/theme/useAppTheme";
import { Box } from "./Box";

export const Thumbnail = () => {
  const { colors } = useAppTheme();

  return (
    <Box
      width={"100%"}
      height={110}
      style={{
        backgroundImage: `linear-gradient(45deg, ${colors.yellow2}, ${colors.yellow3})`,
      }}
    />
  );
};
