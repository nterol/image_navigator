import React from "react";

import { Placeholder } from "./styles";

const GalleryPlaceholder = () =>
  Array.from({ length: 10 }).map((e, i) => (
    <Placeholder key={`placeholder-${i}`} height="100%" />
  ));

export default GalleryPlaceholder;
