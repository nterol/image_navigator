import React from "react";

import { PictureContainer, IMG } from "./styles";

function Picture(props) {
  const pictureClick = () => props.handleClick(props.id);

  return (
    <PictureContainer color={props.color}>
      <IMG src={props.urls.small} onClick={pictureClick} />
    </PictureContainer>
  );
}

export default Picture;
