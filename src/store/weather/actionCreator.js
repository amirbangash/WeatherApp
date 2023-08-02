import * as types from "./types";

export const fetchWeatherAction = (payload) => ({
  type: types.GET_WEATHER_DATA,
  payload,
});
