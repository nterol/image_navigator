import styled from "styled-components";

export const GalleryContainer = styled.div`
  width: 70%;
  overflow: scroll;
  padding: 16px 32px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const Grid = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: minmax(50px, auto);

  div:nth-child(5n) {
    grid-column-end: span 2;
  }
`;
