import { Box } from "./Box";
import { Text } from "./Text";

type Props = {
  image: string;
  name: string;
};

export const Avatar = ({ image, name }: Props) => {
  return (
    <Box flexDirection={"row"} alignItems={"center"} gap="s10">
      <Box
        width={50}
        height={50}
        backgroundColor="text"
        borderRadius="b25"
      ></Box>
      <Text variant="text16">{name}</Text>
    </Box>
  );
};
