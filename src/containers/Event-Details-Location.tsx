import { Box } from "@/components/Box";
import { Text } from "@/components/Text";
import { useLocation } from "@/hooks/useLocation";
import MapView from "react-native-maps";

type Props = {
  beachId: string;
};

export const EventDetailsLocation = ({ beachId }: Props) => {
  const { latitude, longitude } = useLocation({ beachId });

  return (
    <Box gap="s10" paddingHorizontal="s16">
      <Text variant="notFound">Localização</Text>
      <Box width={"100%"} height={200} borderRadius="b5" overflow={"hidden"}>
        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude: latitude as number,
            longitude: longitude as number,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        />
      </Box>
    </Box>
  );
};
