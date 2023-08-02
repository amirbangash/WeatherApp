import * as types from "./types";

const initialState = {
  weatherData: [],
};

export const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_WEATHER_DATA: {
      return {
        ...state,
        weatherData: action.payload,
      };
    }
    default:
      return state;
  }
};
