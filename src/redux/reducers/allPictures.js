import fetchTypes from "../types/fetchTypes";

const allPictures = { picturesList: [], error: false };

function removeDuplicates(myArr, prop) {
  return myArr.filter((obj, pos, arr) => {
    return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos;
  });
}

function allPicturesReducer(state = allPictures, { type, payload }) {
  switch (type) {
    case fetchTypes.ADD_PICTURES: {
      const newList = [...state.picturesList, ...payload];
      const picturesList = removeDuplicates(newList, "id");

      return {
        picturesList,
        error: false
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
