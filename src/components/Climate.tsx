import { getIconByWeatherCode } from "@/utils/weatherIconMap";
import { Box } from "./Box";
import { Icon } from "./Icon";
import { Text } from "./Text";

type Props = {
  temperature: number | null;
  weatherCode: number | null;
};

export const Climate = ({ temperature, weatherCode }: Props) => {
  return (
    <Box flexDirection={"row"} alignItems={"center"} gap="s10">
      <Icon
        name={
          weatherCode == null
            ? "help-outline"
            : getIconByWeatherCode(weatherCode)
        }
        size={28}
      />
      <Text variant="title20">
        {temperature === null ? "00" : temperature}º
      </Text>
    </Box>
  );
};
