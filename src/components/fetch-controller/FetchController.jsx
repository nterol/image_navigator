import React, { useEffect, useState } from "react";

import { Container, ButtonController } from "./styles";
import ControllerConnect from "./controllerConnect";

function RawFetchController({ fetchAPI, error }) {
  const [shouldFetch, setShouldFetch] = useState(true);

  useEffect(() => {
    if (error) setShouldFetch(false);
  }, [error]);

  useEffect(() => {
    fetchAPI();
  }, [fetchAPI, shouldFetch]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      fetchAPI();
    }, 8000);

    if (!shouldFetch || error) window.clearInterval(interval);
    return () => window.clearInterval(interval);
  }, [error, fetchAPI, shouldFetch]);

  const handleClick = () => {
    setShouldFetch(!shouldFetch);
  };

  return (
    <Container>
      <ButtonController onClick={handleClick} shouldFetch={shouldFetch} />
    </Container>
  );
}

const FetchController = ControllerConnect(RawFetchController);

export default FetchController;
