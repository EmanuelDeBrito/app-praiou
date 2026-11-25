import { PropsWithChildren } from "react";
import { ScrollView, View } from "react-native";
import { Box, BoxProps } from "./Box";

export const Container = ({
  children,
  scrollable = false,
  ...boxProps
}: PropsWithChildren & BoxProps & { scrollable?: boolean }) => {
  const Container = scrollable ? ScrollView : View;

  return (
    <Box
      flex={1}
      paddingHorizontal="s16"
      paddingVertical="s20"
      backgroundColor="background"
      {...boxProps}
    >
      <Container>{children}</Container>
    </Box>
  );
};
