import fetchTypes from "../types/fetchTypes";

const allPictures = { picturesList: [], error: false };

function allPicturesReducer(state = allPictures, { type, payload }) {
  switch (type) {
    case fetchTypes.ADD_PICTURES: {
      const newAllPictures = [...state, ...payload].reverse();
      return {picturesList: newAllPictures, error: false};
    }
    case fetchTypes.FETCH_FAIL: {
      return { ...state, error: true };
    }
    default:
      return state;
  }
}

export default allPicturesReducer;
