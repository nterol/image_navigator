import React from "react";
import styled from "styled-components";

import PictureList from "../picture-list/PictureList";
import SavedConnect from "./savedConnect";

const Container = styled.div`
  padding: 16px;
  background: green;
`;

const NoSaved = styled.h2`
  border: 1px solid blue;
  color: #fff;
  font-size: 18px;
`;

function RawSaved({ savedPictures, deletePicture }) {
  return (
    <Container>
      {savedPictures.length ? (
        <PictureList pictureList={savedPictures} handleClick={deletePicture} />
      ) : (
        <NoSaved>Aucune image sauvegardée pour le moment</NoSaved>
      )}
    </Container>
  );
}

const Saved = SavedConnect(RawSaved);

export default Saved;
