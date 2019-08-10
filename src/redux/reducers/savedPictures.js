import savedTypes from "../types/savedTypes";

const savedPictures = [];

function savedPicturesReducer(state = savedPictures, { type, payload }) {
  switch (type) {
    case savedTypes.SAVE_PICTURE: {
      const extendedSavedPictures = [...state, payload].reverse();

      return extendedSavedPictures;
    }
    case savedTypes.DELETE_PICTURE: {
      const newSavedPictures = state.filter(picture => picture.id !== payload);

      return newSavedPictures;
    }

    default:
      return state;
  }
}

export default savedPicturesReducer;
