import React from "react";
import { Provider } from "react-redux";

import store from "./redux/store";

import Main from "./components/Main";
import GlobalStyle from "./styles";
import Menu from "./components/Menu";

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
      <RawApp />
    </Provider>
  );
}

export default App;
