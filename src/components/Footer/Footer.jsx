import React, { useRef, useEffect } from "react";
import styled from "styled-components";

import ParticlesBackground from "../ParticlesBackground";
import startingParticlesConfig from "../ParticlesBackground/utils/starting-particlesjs-config";

const StyledSection = styled.section`
  display: flex;
  width: 100%;
  justify-content: space-around;
  background-color: rgb(10, 10, 10);
  flex-wrap: wrap;
`;

const Column = styled.span`
  width: 400px;
  height: 80%;
  padding: 1em;
  font-family: InputMono;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: space-around;

  a {
    color: #37a3a2;
    margin: 1em;
    font-size: large;
  }
`;
const Title = styled.h1`
  position: relative;
  font-family: "Syncopate-Bold";
  color: whitesmoke;
`;
const Footer = () => {
  return (
    <>
      <StyledSection>
        <Column>
          <Title>Social</Title>
          <a href="https://github.com/pabrcno">GitHub</a>
          <a href="https://www.linkedin.com/in/paulo-briceno/">LinkedIn</a>
          <a href="https://twitter.com/paulobricenog">Twitter</a>
          <a href="https://www.instagram.com/paulobricenog/">Instagram</a>
        </Column>
        <Column>
          <Title>Contact</Title>
          <a href="mailto:pabrcn@gmail.com">pabrcn@gmail.com</a>
        </Column>
        <Column>
          <Title>Currently In</Title>
          <a href="https://www.linkedin.com/in/paulo-briceno/">
            Buenos Aires, Argentina
          </a>
          <p style={{ color: "grey", fontFamily: "InputMono" }}>
            Copiright - Briceño Design 2021
          </p>
        </Column>
      </StyledSection>
    </>
  );
};

export default Footer;
