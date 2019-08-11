import fetchTypes from "../types/fetchTypes";

function pageReducer(state = 1, { type }) {
  switch (type) {
    case fetchTypes.ADD_PICTURES:
      return state + 1;

    default:
      return state;
  }
}

export default pageReducer;
