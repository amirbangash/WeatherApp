import { weatherApi, apiKey } from "./api";

export const fetchForecastData = (lat, lon) => {
  return weatherApi.get(
    `forecast?lat=${lat}&lon=${lon}&cnt=4&units=metric&appid=${apiKey}`
  );
};
