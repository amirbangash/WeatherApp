import { fetchWeatherData } from "../../services/weather";
import { fetchWeatherAction } from "./actionCreator";

export const getWeather = (lat, lon) => async (dispatch) => {
  try {
    const res = await fetchWeatherData(lat, lon);
    dispatch(fetchWeatherAction(res.data));
  } catch (error) {
    console.log("Error:", error);
  }
};
