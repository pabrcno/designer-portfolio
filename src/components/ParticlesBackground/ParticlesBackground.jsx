import React, { Fragment } from "react";
import Particles from "react-particles-js";
import particlesConfig from "../../utils/particlesjs-config";
import styled from "styled-components";

const StyledBackground = styled.div`
  background-color: black;
  position: absolute;

  width: 100vw;
  height: 100vh;
  min-width: 800px;
  min-height: 1000px;
  z-index: -1;
`;

const ParticlesBackground = ({ children }) => {
  return (
    <StyledBackground>
      <Particles params={particlesConfig} />
    </StyledBackground>
  );
};

export default ParticlesBackground;
