import { Box, BoxProps } from "./Box";

export const Divider = (props: BoxProps) => {
  return (
    <Box marginVertical="s24" {...props}>
      <Box width={"100%"} height={1} backgroundColor="text" opacity={0.2} />
    </Box>
  );
};
