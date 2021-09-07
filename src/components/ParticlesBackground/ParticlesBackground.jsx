import React from "react";
import Particles from "react-particles-js";

import styled from "styled-components";

const StyledBackground = styled.div`
  background: ${(props) => props.background};
  position: absolute;
  width: 100vw;
  height: 100vh;
  min-width: 800px;
  min-height: 1000px;
  z-index: 0;
`;

const ParticlesBackground = ({ background, particlesConfig }) => {
  return (
    <StyledBackground background={background}>
      <Particles params={particlesConfig} />
    </StyledBackground>
  );
};

export default ParticlesBackground;
