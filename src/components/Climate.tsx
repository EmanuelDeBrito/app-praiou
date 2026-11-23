import { Box } from "./Box";
import { Text } from "./Text";

type Props = {
  temperature: number | null;
};

export const Climate = ({ temperature }: Props) => {
  return (
    <Box flexDirection={"row"} alignItems={"center"} gap="s10">
      <Text variant="title20">
        {temperature === null ? "00" : temperature}º
      </Text>
    </Box>
  );
};
