import allPicturesReducer from "./allPictures";
import savedPicturesReducer from "./savedPictures";
import pageReducer from "./pageReducer";

const rootState = {
  allPictures: allPicturesReducer,
  savedPictures: savedPicturesReducer,
  page: pageReducer
};

export default rootState;
