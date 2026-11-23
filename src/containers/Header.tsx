import { getTemperature } from "@/api/weather";
import { useEffect, useState } from "react";
import { Avatar } from "../components/Avatar";
import { Box } from "../components/Box";
import { Climate } from "../components/Climate";

export const Header = () => {
  const [temperature, setTemperature] = useState<number | null>(null);
  const [weatherCode, setWeatherCode] = useState<number | null>(null);

  useEffect(() => {
    async function loadWeather() {
      try {
        const { temp, weatherCode } = await getTemperature(-24.1831, -46.7889);
        setTemperature(temp);
        setWeatherCode(weatherCode);
      } catch (error) {
        console.log("Falha no clima: ", error);
      }
    }

    loadWeather();
  }, []);

  return (
    <Box
      flexDirection={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      width={"100%"}
      height={65}
      paddingHorizontal="s16"
      paddingVertical="s12"
      backgroundColor="yellow1"
    >
      <Avatar image="" name="Wally West" />

      <Climate temperature={temperature} weatherCode={weatherCode} />
    </Box>
  );
};
