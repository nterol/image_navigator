import React from "react";
import styled from "styled-components";

const Container = styled.div`
  border: 1px solid blue;
`;

const IMG = styled.img`
  width: 150px;
  height: 200px;
`;

function Picture(props) {
  return (
    <Container>
      <IMG src={props.src} />
    </Container>
  );
}

export default Picture;
