import { Box } from "@/components/Box";
import { Text } from "@/components/Text";

type Props = {
  beachId: string;
};

export const EventDetailsLocation = ({ beachId }: Props) => {
  return (
    <Box gap="s10" paddingHorizontal="s16">
      <Text variant="notFound">Localização</Text>
    </Box>
  );
};
