import { fetchWeatherData } from "../../services/weather";
import { loaderAction } from "../uiState/action";
import { fetchWeatherAction } from "./actionCreator";

export const getWeather = (lat, lon) => async (dispatch) => {
  try {
    dispatch(loaderAction(true));
    const res = await fetchWeatherData(lat, lon);
    dispatch(fetchWeatherAction(res.data));
  } catch (error) {
    console.log("Error:", error);
  } finally {
    dispatch(loaderAction(false));
  }
};
