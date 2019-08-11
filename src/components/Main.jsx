import React from "react";

import Gallery from "./gallery/Gallery";
import Saved from "./saved/Saved";

import { MainContainer } from "./styles";

function Main() {
  return (
    <MainContainer>
      <Gallery />
      <Saved />
    </MainContainer>
  );
}

export default Main;
