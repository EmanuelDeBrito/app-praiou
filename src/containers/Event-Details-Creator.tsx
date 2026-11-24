import { Avatar } from "@/components/Avatar";
import { Box } from "@/components/Box";
import { Text } from "@/components/Text";

type Props = {
  creator: string;
};

export const EventDetailsCreator = ({ creator }: Props) => {
  return (
    <Box gap="s10" paddingHorizontal="s16">
      <Text variant="notFound">Criador do Evento</Text>
      <Avatar image="" name={creator} />
    </Box>
  );
};
