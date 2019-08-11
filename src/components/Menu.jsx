import React from "react";
import FetchController from "./fetch-controller/FetchController";

import { Nav, H1 } from "./styles";

const Menu = () => (
  <Nav>
    <H1>Image Navigator</H1>
    <FetchController />
  </Nav>
);

export default Menu;
