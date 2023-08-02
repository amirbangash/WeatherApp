import * as types from "./types";

export const fetchForecastAction = (payload) => ({
  type: types.GET_FORECAST_DATA,
  payload,
});
