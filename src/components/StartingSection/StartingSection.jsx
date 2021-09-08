import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import NamePresentation from "./NamePresentation";
import ParticlesBackground from "../ParticlesBackground";
import startingParticlesConfig from "../ParticlesBackground/utils/starting-particlesjs-config";

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
  cursor: pointer;
  transition: font-size 1s ease;
  color: #37a3a2;
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
    <>
      <ParticlesBackground
        background={"black"}
        particlesConfig={startingParticlesConfig}
        styles={{ cursor: "pointer" }}
      />
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
      <div
        ref={messagesEndRef}
        style={{
          position: "absolute",
          top: "80%",
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
    </>
  );
};

export default StartingSection;
