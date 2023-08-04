import { fetchForecastData } from "../../services/forecast";
import { fetchForecastAction } from "./actionCreator";

export const getForecast = (lat, lon) => async (dispatch) => {
  try {
    const res = await fetchForecastData(lat, lon);
    dispatch(fetchForecastAction(res.data));
  } catch (error) {
    console.log("Error:", error);
  }
};
