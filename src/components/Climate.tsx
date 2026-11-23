import { Box } from "./Box";
import { Text } from "./Text";

type Props = {
  temperature: number | null;
  weatherCode: number | null;
};

export const Climate = ({ temperature, weatherCode }: Props) => {
  return (
    <Box flexDirection={"row"} alignItems={"center"} gap="s10">
      <Text>{weatherCode}</Text>
      <Text variant="title20">
        {temperature === null ? "00" : temperature}º
      </Text>
    </Box>
  );
};
