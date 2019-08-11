import React from "react";

import Picture from "../picture/Picture";

const PictureList = ({ pictureList, handleClick, type }) =>
  pictureList.map(picture => (
    <Picture
      key={`${type}-${picture.id}`}
      type={type}
      handleClick={handleClick}
      {...picture}
    />
  ));

export default PictureList;
