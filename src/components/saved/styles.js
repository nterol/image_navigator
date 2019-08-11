import styled from "styled-components";

export const SavedContainer = styled.div`
  width: 30%;
  border-radius: 4px;
  overflow: scroll;
  padding: 16px;
  background: linear-gradient(to bottom, #ee9ca7, #ffdde1);
  display: flex;
  flex-direction: column;

  div {
    margin-bottom: 8px;
  }
`;

export const H2 = styled.h2`
  color: #fff;
`;

export const NoSaved = styled.h2`
  color: #fff;
  font-size: 18px;
`;
