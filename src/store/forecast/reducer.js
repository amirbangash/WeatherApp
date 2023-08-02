import * as types from "./types";

const initialState = {
  forecastData: [],
};

export const forecastReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_FORECAST_DATA: {
      return {
        ...state,
        forecastData: action.payload,
      };
    }
    default:
      return state;
  }
};
