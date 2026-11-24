import { Box } from "@/components/Box";
import { IconButton } from "@/components/Icon-Button";
import { router } from "expo-router";
import { ImageBackground } from "react-native";

type Props = {
  image: number;
};

export const EventDetailsHeader = ({ image }: Props) => {
  return (
    <ImageBackground source={image} style={{ width: "100%", height: 230 }}>
      <Box
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        paddingTop="s20"
        paddingHorizontal="s16"
        backgroundColor="error"
      >
        <IconButton iconName="arrow-back-outline" onPress={router.back} />
        <IconButton iconName="share-outline" onPress={() => {}} />
      </Box>
    </ImageBackground>
  );
};
