import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background: ${props => props.color};
`;

const IMG = styled.img`
  display: flex;
  width: 100%;
  height: 100%;
  object-fit: cover;
  background: ${props => props.color};
  border-radius: 6px;
`;

function Picture(props) {
  const pictureClick = () => props.handleClick(props.id);

  return (
    <Container color={props.color}>
      <IMG src={props.urls.small} onClick={pictureClick} />
    </Container>
  );
}

export default Picture;
