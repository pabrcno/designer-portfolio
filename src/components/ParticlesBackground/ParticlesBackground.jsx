import React from "react";
import Particles from "react-particles-js";

import styled from "styled-components";

const StyledBackground = styled.div`
  background: ${(props) => props.background};
  width: 100%;
  min-width: 1800px;
  overflow-x: hidden;
  overflow-y: hidden;
  background-color: black;
  cursor: pointer;
`;

const ParticlesBackground = ({
  background,
  particlesConfig,
  children,
  position,
}) => {
  return (
    <StyledBackground background={background}>
      <Particles
        params={particlesConfig}
        style={{
          position: `${position ? position : "static"}`,
        }}
      >
        {children}
      </Particles>
    </StyledBackground>
  );
};

export default ParticlesBackground;
