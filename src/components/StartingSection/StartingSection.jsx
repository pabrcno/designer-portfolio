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
  top: 30%;
  left: 10%;
  display: flex;
  cursor: pointer;
`;

const Subtitle = styled.h2`
  position: ${(props) => (isMobile ? "" : "absolute")};
  bottom: 2%;
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
    font-size: 2.5em;
  }
  &:active {
    font-size: 2em;
  }
`;
const ContactMeBadge = styled.section`
  position: absolute;
  display: flex;
  margin-top: 3em;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  padding: 0 1em 0 2em;

  margin-left: 80%;
  color: white;
  background-color: #40fff335;
  font-family: InputMono;

  transition: all 400ms ease;
  transform: rotate(35deg);
  margin-right: 150px;
  rotate: 45;
  &:hover {
    background-color: #40fff385;
    width: 155px;
    height: 155px;
    transform: scale(1.3, 1.3) rotate(0deg);
  }
  a {
    margin-left: 5%;
    color: white;

    text-decoration: none;
    transition: all 400ms ease;
    &:hover {
      transition: all 200ms ease;
    }
  }
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
      </Section>
      <ContactMeBadge>
        <a href="mailto:pabrcn@gmail.com">
          <h2>Let's work together!</h2>
        </a>
      </ContactMeBadge>
    </>
  );
};

export default StartingSection;
