import { put, call, takeLatest } from "redux-saga/effects";

import fetchImages from "../api";
import { addPictures, failFetch } from "../actions";
import fetchTypes from "../types/fetchTypes";

function* workerSaga() {
  console.log("worker");
  const payload = yield call(fetchImages);
  console.log("payload", payload);
  if (!payload) yield put(failFetch());
  else yield put(addPictures(payload));
}

function* watcherSaga() {
  yield takeLatest(fetchTypes.FETCH_IMAGES, workerSaga);
}

export default watcherSaga;
