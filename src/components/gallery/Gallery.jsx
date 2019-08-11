import React from "react";

import PictureList from "../picture-list/PictureList";
import GalleryPlaceholder from "../gallery-placeholder/GalleryPlaceholder";
import GalleryConnect from "./galleryConnect";

import { GalleryContainer, Grid } from "./styles";

function RawGallery({ picturesList, savePicture }) {
  const noPictures = !picturesList.length;
  return (
    <GalleryContainer>
      <h2>Latest Images</h2>
      <Grid>
        {noPictures ? (
          <GalleryPlaceholder />
        ) : (
          <PictureList
            type="gallery"
            pictureList={picturesList}
            handleClick={savePicture}
          />
        )}
      </Grid>
    </GalleryContainer>
  );
}

const Gallery = GalleryConnect(RawGallery);

export default Gallery;
