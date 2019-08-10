import React from "react";
import styled, { css, keyframes } from "styled-components";

const Container = styled.div`
  margin: 32px;
`;

const placeHolderShimmer = keyframes`
0% {
    background-position: -300px 0;
  }
  100% {
    background-position: 500px 0;
  }
`;

const animationName = css`
  animation-name: ${placeHolderShimmer};
`;

export const Placeholder = styled.div`
  margin-top: 16px;
  border-radius: 5px;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  ${animationName}
  animation-timing-function: linear;
  background: #6bd3e0;
  background: linear-gradient(to right, #bde2e4 8%, #eeeeee 18%, #bde2e4 33%);
  background-size: 800px 104px;
  height: ${({ height }) => height}px;
  position: relative;
`;

const GalleryPlaceholder = () => (
  <Container>
    {Array.from({ length: 8 }, () => {}).map((e, i) => (
      <Placeholder key={`placeholder-${i}`} height="80" />
    ))}
  </Container>
);

export default GalleryPlaceholder;
