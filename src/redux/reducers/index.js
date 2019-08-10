import allPicturesReducer from "./allPictures";
import savedPicturesReducer from "./savedPictures";

const rootState = {
  allPictures: allPicturesReducer,
  savedPictures: savedPicturesReducer
};

export default rootState;
