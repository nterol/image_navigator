import fetchTypes from "./types/fetchTypes";
import savedTypes from "./types/savedTypes";

export const fetchFromAPI = () => ({ type: fetchTypes.FETCH_IMAGES });

export const errorReset = () => ({ type: fetchTypes.RESET_ERROR });

export const addPictures = payload => ({
  type: fetchTypes.ADD_PICTURES,
  payload
});

export const failFetch = () => ({ type: fetchTypes.FETCH_FAIL });

export const savePicture = id => ({
  type: savedTypes.SAVE_PICTURE,
  payload: id
});

export const deletePicture = id => ({
  type: savedTypes.DELETE_PICTURE,
  payload: id
});
