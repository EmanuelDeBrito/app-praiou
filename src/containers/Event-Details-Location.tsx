import { Box } from "@/components/Box";
import { Text } from "@/components/Text";

type Props = {
  beachId: string;
};

export const EventDetailsLocation = ({ beachId }: Props) => {
  return (
    <Box>
      <Text>Localização {beachId}</Text>
    </Box>
  );
};
