import { CityType } from "@/types/city";
import { ImageBackground } from "react-native";
import { Text } from "./Text";

type Props = {
  city: CityType;
};

export const Card = ({ city }: Props) => {
  return (
    <ImageBackground source={city.image} style={{ width: "100%", height: 220 }}>
      <Text>{city.name}</Text>
    </ImageBackground>
  );
};
