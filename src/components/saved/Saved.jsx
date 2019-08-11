import React from "react";
import styled from "styled-components";

import PictureList from "../picture-list/PictureList";
import SavedConnect from "./savedConnect";

const Container = styled.div`
  width: 30%;
  border-radius: 4px;
  overflow: scroll;
  padding: 16px;
  background: linear-gradient(to bottom, #ee9ca7, #ffdde1);
  display: flex;
  flex-direction: column;

  div {
    margin-bottom: 8px;
  }
`;

const H2 = styled.h2`
  color: #fff;
`;

const NoSaved = styled.h2`
  color: #fff;
  font-size: 18px;
`;

function RawSaved({ savedPictures, deletePicture }) {
  return (
    <Container>
      <H2>Saved Pictures</H2>
      {savedPictures.length ? (
        <PictureList
          type="saved"
          pictureList={savedPictures}
          handleClick={deletePicture}
        />
      ) : (
        <NoSaved>No saved pictures at the moment</NoSaved>
      )}
    </Container>
  );
}

const Saved = SavedConnect(RawSaved);

export default Saved;
