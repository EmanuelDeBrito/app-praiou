import { CityType } from "@/types/city";
import { ImageBackground } from "react-native";
import { Text } from "./Text";

type Props = {
  city: CityType;
};

export const Card = ({ city }: Props) => {
  return (
    <ImageBackground source={city.image} style={{ width: 200, height: 200 }}>
      <Text>{city.name}</Text>
    </ImageBackground>
  );
};
