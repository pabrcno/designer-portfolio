import React, { Fragment } from "react";
import styled from "styled-components";
import NamePresentation from "../NamePresentation";
import ParticlesBackground from "../ParticlesBackground";
const StyledSection = styled.div`
  position: absolute;
  top: 30%;
  left: 10%;
  display: flex;
`;

const StartingSection = (props) => {
  return (
    <StyledSection>
      <NamePresentation
        textList={[
          "HI! I'M PAULO BRCN",
          " A SOFTWARE CREATOR",
          "LIVING IN",
          " BUENOS AIRES, AR",
        ]}
      />
    </StyledSection>
  );
};

export default StartingSection;
