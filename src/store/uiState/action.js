import * as types from "./types";

export const loaderAction = (payload) => ({
  type: types.LOADER_ACTION,
  payload,
});
