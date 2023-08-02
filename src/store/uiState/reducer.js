import * as types from "./types";

const initialState = {
  Loading: false,
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOADER_ACTION: {
      return {
        ...state,
        Loading: action.payload,
      };
    }
    default:
      return state;
  }
};
