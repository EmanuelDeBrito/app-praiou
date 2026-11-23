import { Box, BoxProps } from "./Box";
import { Text } from "./Text";

type Props = {
  label: string;
};

export const Pill = ({ label }: Props) => {
  return (
    <Box {...boxStyles}>
      <Text variant="pill">{label}</Text>
    </Box>
  );
};

const boxStyles: BoxProps = {
  paddingHorizontal: "s16",
  paddingVertical: "s2",
  backgroundColor: "background",
  borderRadius: "rounded",
};
