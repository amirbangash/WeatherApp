import { fetchForecastData } from "../../services/forecast";
import { fetchForecastAction } from "./actionCreator";
import { loaderAction } from "../uiState/action";

export const getForecast = (lat, lon) => async (dispatch) => {
  try {
    dispatch(loaderAction(true));
    const res = await fetchForecastData(lat, lon);
    dispatch(fetchForecastAction(res.data));
  } catch (error) {
    console.log("Error:", error);
  } finally {
    dispatch(loaderAction(false));
  }
};
