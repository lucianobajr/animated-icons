import React from "react";
import Lottie from "react-lottie";

import { Container } from "./styles";
import data1 from "../../json/290-coin-outline-edited.json";
import data2 from "../../json/61-camera-outline.json";
import data3 from "../../json/63-home-outline.json";
import data4 from "../../json/45-clock-time-outline.json";
import data5 from "../../json/646-walking-walkcycle-person-outline-edited.json";

function Home() {
  const defaultOptions1 = {
    loop: true,
    autoplay: true,
    animationData: data1,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: data2,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const defaultOptions3 = {
    loop: true,
    autoplay: true,
    animationData: data3,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const defaultOptions4 = {
    loop: true,
    autoplay: true,
    animationData: data4,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const defaultOptions5 = {
    loop: true,
    autoplay: true,
    animationData: data5,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Container>
      <div>
        <Lottie width={250} height={250} options={defaultOptions1} />
        <Lottie width={250} height={250} options={defaultOptions2} />
        <Lottie width={250} height={250} options={defaultOptions3} />
        <Lottie width={250} height={250} options={defaultOptions4} speed={0.2} />
        <Lottie width={250} height={250} options={defaultOptions5}  />
      </div>
      <button>Clique</button>
    </Container>
  );
}

export default Home;
