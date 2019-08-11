import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import createSagaMiddleware from "redux-saga";

import rootState from "./reducers/index";
import watcherSaga from "./saga/rootSaga";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["page"]
};

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers(rootState);

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composed = compose(composeWithDevTools(applyMiddleware(sagaMiddleware)));

export default () => {
  let store = createStore(persistedReducer, {}, composed);
  let persistor = persistStore(store);
  sagaMiddleware.run(watcherSaga);
  return { store, persistor };
};
