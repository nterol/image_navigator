import React from "react";
import PictureList from "../picture-list/PictureList";
import SavedConnect from "./savedConnect";

import { SavedContainer, H2, NoSaved } from "./styles";

function RawSaved({ savedPictures, deletePicture }) {
  return (
    <SavedContainer>
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
    </SavedContainer>
  );
}

const Saved = SavedConnect(RawSaved);

export default Saved;
