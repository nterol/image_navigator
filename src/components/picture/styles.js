import styled from "styled-components";

export const PictureContainer = styled.div`
  background: ${props => props.color};
  border-radius: 6px;
`;

export const IMG = styled.img`
  display: flex;
  width: 100%;
  height: 100%;
  object-fit: cover;
  background: ${props => props.color};
  border-radius: 6px;
`;
