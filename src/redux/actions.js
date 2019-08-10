import fetchTypes from "./types/fetchTypes";
import savedTypes from "./types/savedTypes";

export const fetchFromAPI = () => ({ type: fetchTypes.FETCH_IMAGES });

export const addPictures = payload => ({
  type: fetchTypes.ADD_PICTURES,
  payload
});

export const failFetch = () => ({ type: fetchTypes.FETCH_FAIL });

export const savePicture = () => ({ type: savedTypes.SAVE_PICTURE });

export const deletePicture = () => ({ type: savedTypes.DELETE_PICTURE });
