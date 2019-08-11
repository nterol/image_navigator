import { put, call, all, fork, select, take } from "redux-saga/effects";

import fetchImages from "../api";
import { failFetch } from "../actions";
import fetchTypes from "../types/fetchTypes";
import savedTypes from "../types/savedTypes";

const getPage = ({ page }) => page;

const getPicture = ({ allPictures: { picturesList } }, id) => {
  return picturesList.filter(picture => picture.id === id)[0];
};

function* fetchSaga() {
  while (true) {
    yield take(fetchTypes.FETCH_IMAGES);

    const page = yield select(getPage);
    const payload = yield call(fetchImages, page);

    if (payload === undefined) yield put(failFetch());
    else yield put({ type: fetchTypes.ADD_PICTURES, payload });
  }
}

function* savePictureSaga() {
  while (true) {
    const { payload: id } = yield take(savedTypes.SAVE_PICTURE);

    const payload = yield select(getPicture, id);

    yield put({ type: savedTypes.ADD_SAVED_PICTURES, payload });
  }
}

function* watcherSaga() {
  yield all([fork(fetchSaga), fork(savePictureSaga)]);
}

export default watcherSaga;
