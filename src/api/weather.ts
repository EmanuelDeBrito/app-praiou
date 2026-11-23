export const getTemperature = async (latitude: number, longitude: number) => {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Erro ao buscar temperatura");
  }

  const data = await response.json();
  return {
    temp: Math.round(data.current.temperature_2m),
    weatherCode: data.current.weather_code as number,
  };
};
