import React from "react";
import styled from "styled-components";
import NamePresentation from "./NamePresentation";
const StyledSection = styled.section`
  position: absolute;
  top: 30%;
  left: 10%;
  display: flex;
  cursor: pointer;
`;

const Subtitle = styled.h2`
  position: absolute;
  top: 90%;
  left: 10%;
  color: white;
  margin-left: 40px;
  font-size: 2em;
  font-family: Syncopate-Bold;
  text-decoration: underline;
`;
const StartingSection = (props) => {
  return (
    <>
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
      <Subtitle>projects</Subtitle>
    </>
  );
};

export default StartingSection;
