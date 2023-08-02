import { combineReducers } from "redux";
import { weatherReducer } from "./weather/reducer";
import { forecastReducer } from "./forecast/reducer";
import { uiReducer } from "./uiState/reducer";

const rootReducer = combineReducers({
  weather: weatherReducer,
  forecast: forecastReducer,
  uiState: uiReducer,
});

export default rootReducer;
