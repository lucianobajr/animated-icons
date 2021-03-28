import React from "react";
import Lottie from "react-lottie";
import { Container } from "./styles";

import data1 from "../../json/48033-404-error.json";
function NotFound() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: data1,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Container>
      <Container>
        <Lottie width={1000} height={1000} options={defaultOptions} />
      </Container>
    </Container>
  );
}

export default NotFound;
