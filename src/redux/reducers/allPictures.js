import fetchTypes from "../types/fetchTypes";

const allPictures = { picturesList: [], error: false, page: 1 };

function allPicturesReducer(state = allPictures, { type, payload }) {
  switch (type) {
    case fetchTypes.ADD_PICTURES: {
      const newAllPictures = [...new Set([...state.picturesList, ...payload])];

      return {
        picturesList: newAllPictures,
        error: false,
        page: state.page + 1
      };
    }
    case fetchTypes.FETCH_FAIL: {
      return { ...state, error: true };
    }
    default:
      return state;
  }
}

export default allPicturesReducer;
