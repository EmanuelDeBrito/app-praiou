import { Box } from "@/components/Box";
import { Text } from "@/components/Text";

type Props = {
  name: string;
  description: string;
};

export const EventDetailsInfo = ({ name, description }: Props) => {
  return (
    <Box>
      <Text>{name}</Text>
      <Text>{description}</Text>
    </Box>
  );
};
