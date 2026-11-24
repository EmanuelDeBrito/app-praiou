import { useAppTheme } from "@/theme/useAppTheme";
import { Box } from "./Box";

type Props = {
  borderRadius?: boolean;
};

export const BlackOpacity = ({ borderRadius = false }: Props) => {
  const { borderRadii } = useAppTheme();

  return (
    <Box
      position={"absolute"}
      width={"100%"}
      height={"100%"}
      backgroundColor="gray"
      opacity={0.35}
      style={{
        borderRadius: borderRadius ? borderRadii.b10 : 0,
      }}
    />
  );
};
