import { Box } from "@/components/Box";
import { Text } from "@/components/Text";

type Props = {
  name: string;
  description: string;
};

export const EventDetailsInfo = ({ name, description }: Props) => {
  return (
    <Box paddingHorizontal="s16" marginTop="s20" gap="s6">
      <Text variant="title25">{name}</Text>
      <Text variant="description">{description}</Text>
    </Box>
  );
};
