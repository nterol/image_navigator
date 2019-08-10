import React from "react";
import styled from "styled-components";
import FetchController from "./fetch-controller/FetchController";

const Nav = styled.nav`
  padding: 8px 32px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  z-index: 2;
`;

const Menu = () => (
  <Nav>
    <h1>Image Navigator</h1>
    <FetchController />
  </Nav>
);

export default Menu;
