import React from "react";
import styled from "styled-components";

import PictureList from "../picture-list/PictureList";
import GalleryPlaceholder from "../gallery-placeholder/GalleryPlaceholder";
import GalleryConnect from "./galleryConnect";

const Container = styled.div`
  width: 70%;
  overflow: scroll;
  padding: 16px 32px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Grid = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: minmax(50px, auto);

  div:nth-child(5n) {
    grid-column-end: span 2;
  }
`;

function RawGallery({ picturesList, savePicture }) {
  const noPictures = !picturesList.length;
  return (
    <Container>
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
    </Container>
  );
}

const Gallery = GalleryConnect(RawGallery);

export default Gallery;
