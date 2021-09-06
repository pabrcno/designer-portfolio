import React, { Fragment } from "react";
import styled from "styled-components";
import NavBar from "../../components/NavBar/NavBar";
import ParticlesBackground from "../../components/ParticlesBackground";
import StartingSection from "../../components/StartingSection";

const StyledMainScreen = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Main = (props) => {
  return (
    <StyledMainScreen>
      <ParticlesBackground />
      <NavBar />
      <StartingSection />
    </StyledMainScreen>
  );
};

export default Main;
