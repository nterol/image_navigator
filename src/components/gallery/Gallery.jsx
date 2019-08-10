import React from "react";
import styled from "styled-components";

import PictureList from "../picture-list/PictureList";
import GalleryPlaceholder from "../gallery-placeholder/GalleryPlaceholder";
import GalleryConnect from "./galleryConnect";

const Container = styled.div`
  width: 80%;
  background: blue;
`;

function RawGallery({ picturesList, error }) {
  const noPictures = error || !picturesList.length;
  return (
    <Container>
      {noPictures ? (
        <GalleryPlaceholder />
      ) : (
        <PictureList pictureList={picturesList} />
      )}
    </Container>
  );
}

const Gallery = GalleryConnect(RawGallery);

export default Gallery;
