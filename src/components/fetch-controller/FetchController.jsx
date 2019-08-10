import React, { useEffect, useState } from "react";
import styled from "styled-components";

import ControllerConnect from "./controllerConnect";

const Container = styled.div`
  position: fixed;
  right: 8px;
  padding: 16px;
  display: flex;
  flex-direction: row;
`;

const ButtonController = styled.button`
  padding: 16px;
  border: none;
  background: cyan;
  border-radius: 30px;
  font-weight: 28px;
`;

const StopFetch = () => (
  <span role="img" aria-label="fetch-stop">
    ⏸
  </span>
);

const StartFetch = () => (
  <span role="img" aria-label="fetch-start">
    ▶️
  </span>
);

function RawFetchController({ fetchAPI, error }) {
  const [shouldFetch, setShouldFetch] = useState(true);

  const stopInterval = interval => window.clearInterval(interval);

  useEffect(() => {
    const interval = window.setInterval(() => {
      fetchAPI();
    }, 4000);

    if (!shouldFetch || error) window.clearInterval(interval);
    return () => stopInterval(interval);
  }, [error, fetchAPI, shouldFetch]);

  const handleClick = () => setShouldFetch(!shouldFetch);

  // penser à lire l'article de dan sur ce genre d'UI sur son blog

  return (
    <Container>
      <ButtonController onClick={handleClick}>
        {shouldFetch ? <StopFetch /> : <StartFetch />}
      </ButtonController>
    </Container>
  );
}

const FetchController = ControllerConnect(RawFetchController);

export default FetchController;
