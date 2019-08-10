import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";

import rootState from "./reducers/index";
import watcherSaga from "./saga/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers(rootState);

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(watcherSaga);

export default store;
