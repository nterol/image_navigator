import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import createStore from "./redux/store";

import Main from "./components/Main";
import GlobalStyle from "./styles";
import Menu from "./components/Menu";

const { store, persistor } = createStore();

export const RawApp = () => (
  <>
    <GlobalStyle />
    <Menu />
    <Main />
  </>
);

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RawApp />
      </PersistGate>
    </Provider>
  );
}

export default App;
