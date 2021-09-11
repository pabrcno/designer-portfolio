import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import NamePresentation from "./NamePresentation";
import ParticlesBackground from "../ParticlesBackground";
import startingParticlesConfig from "../ParticlesBackground/utils/starting-particlesjs-config";
import { isMobile } from "react-device-detect";
const Section = styled.div`
  overflow-x: hidden;
  max-width: 100vw;
`;
const StyledSection = styled.section`
  position: absolute;
  top: 25%;
  left: 10%;
  display: flex;
  cursor: pointer;
`;

const Subtitle = styled.h2`
  position: ${(props) => (isMobile ? "" : "absolute")};
  bottom: 10%;
  right: 10%;
  color: white;
  z-index: 1;
  font-size: 2em;
  font-family: Syncopate-Bold;
  text-decoration: underline;
  cursor: pointer;
  transition: font-size 1s ease;
  margin-left: 2em;

  &:hover {
    font-size: 2.1em;
  }
  &:active {
    font-size: 2em;
  }
`;
const StartingSection = ({ setY, scrollDestinationRef }) => {
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Section>
      <ParticlesBackground
        background={"black"}
        particlesConfig={startingParticlesConfig}
        styles={{ cursor: "pointer" }}
      />
      <StyledSection>
        <NamePresentation
          textList={[
            "PAULO BRICEÑO",
            "SOFTWARE DEVELOPER",
            "LIVING IN",
            "BUENOS AIRES, AR",
          ]}
        />
      </StyledSection>
      <div
        ref={messagesEndRef}
        style={{
          position: "absolute",
          top: "90%",
          left: "10%",
        }}
      ></div>
      <Subtitle
        onClick={() => {
          scrollToBottom();
        }}
      >
        PROJECTS
      </Subtitle>
    </Section>
  );
};

export default StartingSection;
