export async function getTemperature(
  latitude: number,
  longitude: number,
): Promise<number> {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Erro ao buscar temperatura");
  }

  const data = await response.json();
  return Math.round(data.current.temperature_2m);
}
