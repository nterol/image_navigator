import React from "react";
import styled from "styled-components";

import Picture from "../picture/Picture";

const Container = styled.div`
  border: 1px solid blue;
`;

const PictureList = ({ pictureList, handleClick }) => (
  <Container>
    {pictureList.map(picture => (
      <Picture handleClick={handleClick} {...picture} />
    ))}
  </Container>
);

export default PictureList;
