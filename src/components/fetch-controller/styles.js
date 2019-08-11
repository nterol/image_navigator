import styled, { css } from "styled-components";

export const Container = styled.div`
  position: fixed;
  right: 8px;
  padding: 16px;
  display: flex;
  flex-direction: row;
`;

const play = css`
  border-style: solid;
  border-width: 16px 0 16px 32px;
`;

const pause = css`
  border-style: double;
  border-width: 0px 0 0px 32px;
`;

export const ButtonController = styled.button`
  background: transparent;
  box-sizing: border-box;
  height: 32px;
  border-color: transparent transparent transparent
    ${props => (props.shouldFetch ? "#9ceed8" : "#d0ee9c")};
  transition: 100ms all ease;
  will-change: border-width;
  cursor: pointer;
  ${props => (props.shouldFetch ? pause : play)}

  &:focus {
    outline: none;
  }
`;
