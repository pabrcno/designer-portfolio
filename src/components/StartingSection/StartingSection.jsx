import React, { useRef } from "react";
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
  top: ${(props) => (isMobile ? "20%" : "30%")};
  left: 5%;
  display: flex;
  cursor: pointer;
`;

const Subtitle = styled.h2`
  position: ${(props) => (isMobile ? "" : "absolute")};
  bottom: 2%;
  right: 10%;
  color: white;
  z-index: 1;
  padding-top: 100px;
  font-size: 3em;
  font-family: Syncopate-Bold;
  text-decoration: underline;
  cursor: pointer;
  transition: font-size 1s ease;
  margin-left: 1.5em;
`;

const StartingSection = ({ setY, scrollDestinationRef }) => {
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
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

        <Subtitle
          ref={messagesEndRef}
          onClick={() => {
            scrollToBottom();
          }}
        >
          PROJECTS
        </Subtitle>
      </Section>
    </>
  );
};

export default StartingSection;
