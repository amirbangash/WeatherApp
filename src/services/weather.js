import { weatherApi, apiKey } from "./api";

export const fetchWeatherData = (lat, lon) => {
  return weatherApi.get(
    `weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`
  );
};
