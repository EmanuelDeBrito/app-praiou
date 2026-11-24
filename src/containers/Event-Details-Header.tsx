import { BlackOpacity } from "@/components/Black-Opacity";
import { Box } from "@/components/Box";
import { IconButton } from "@/components/Icon-Button";
import { router } from "expo-router";
import { Alert, ImageBackground, Share } from "react-native";

type Props = {
  name: string;
  image: number;
  city: string;
  beach: string;
  date: string;
  hour: string;
};

export const EventDetailsHeader = ({
  name,
  image,
  city,
  beach,
  date,
  hour,
}: Props) => {
  const handleShare = async () => {
    try {
      const message = [
        `🏖️ Bora participar do evento *${name}* no Praiou!`,
        `📍 Local: ${beach} - ${city}`,
        `📅 Data: ${date} às ${hour}`,
      ].join("\n");

      await Share.share({
        title: `Evento: ${name}`, // Usado como título no Android e assunto de e-mail
        message,
      });
    } catch {
      Alert.alert("Erro", "Não foi possível compartilhar este evento.");
    }
  };

  return (
    <ImageBackground source={image} style={{ width: "100%", height: 230 }}>
      <BlackOpacity />
      <Box
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        paddingTop="s20"
        paddingHorizontal="s16"
      >
        <IconButton iconName="arrow-back-outline" onPress={router.back} />
        <IconButton iconName="share-outline" onPress={handleShare} />
      </Box>
    </ImageBackground>
  );
};
