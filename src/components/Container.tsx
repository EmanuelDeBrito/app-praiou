import { PropsWithChildren } from "react";
import { Box, BoxProps } from "./Box";

export const Container = ({
  children,
  ...boxProps
}: PropsWithChildren & BoxProps) => {
  return (
    <Box
      flex={1}
      paddingHorizontal="s16"
      paddingVertical="s20"
      backgroundColor="background"
      {...boxProps}
    >
      {children}
    </Box>
  );
};
