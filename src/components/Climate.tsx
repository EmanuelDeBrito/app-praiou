import { Box } from "./Box";
import { Text } from "./Text";

type Props = {
  temperature: string;
};

export const Climate = ({ temperature }: Props) => {
  return (
    <Box flexDirection={"row"} alignItems={"center"} gap="s10">
      <Text variant="title20">00º</Text>
    </Box>
  );
};
