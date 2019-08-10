import React from "react";
import styled from "styled-components";

import Gallery from "./gallery/Gallery";
import Saved from "./saved/Saved";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

function Main() {
  return (
    <Container>
      <Gallery />
      <Saved />
    </Container>
  );
}

export default Main;
