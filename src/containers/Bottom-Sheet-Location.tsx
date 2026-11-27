import { BottomSheet } from "@/components/Bottom-Sheet";
import { Box } from "@/components/Box";
import { useWindowDimensions } from "react-native";
import MapView from "react-native-maps";
import { SharedValue } from "react-native-reanimated";

type Props = {
  latitude: number;
  longitude: number;
  bottomSheetIsOpen: SharedValue<boolean>;
  duration?: number;
  toggleBottomSheetIsOpen: () => void;
};

export const BottomSheetLocation = ({
  latitude,
  longitude,
  bottomSheetIsOpen,
  duration = 700,
  toggleBottomSheetIsOpen,
}: Props) => {
  // Altura do dispositivo
  const { height } = useWindowDimensions();

  return (
    <BottomSheet
      isOpen={bottomSheetIsOpen}
      onPress={toggleBottomSheetIsOpen}
      duration={duration}
    >
      <Box
        width={"100%"}
        height={height * 0.6}
        borderTopLeftRadius="b25"
        borderTopRightRadius="b25"
        overflow={"hidden"}
      >
        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude: latitude as number,
            longitude: longitude as number,
            latitudeDelta: 0.01,
            longitudeDelta: 0.02,
          }}
        />
      </Box>
    </BottomSheet>
  );
};
