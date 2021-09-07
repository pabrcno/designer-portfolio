import React from "react";
import styled from "styled-components";
import NavBar from "../../components/NavBar/NavBar";
import ParticlesBackground from "../../components/ParticlesBackground";
import ProjectsSection from "../../components/ProjectsSection/ProjectsSection";
import StartingSection from "../../components/StartingSection";
import startingParticlesConfig from "../../components/ParticlesBackground/utils/starting-particlesjs-config";

const StyledMainScreen = styled.div`
  width: 98vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: visible;
`;
const Scaffold = styled.div`
  width: 100vw;
  height: 90vh;
  z-index: -1;
`;

const Main = (props) => {
  return (
    <StyledMainScreen>
      <ParticlesBackground
        background={"black"}
        particlesConfig={startingParticlesConfig}
        styles={{ cursor: "pointer" }}
      />
      <NavBar style={{ zIndex: 3 }} />
      <StartingSection />
      <Scaffold />

      <ProjectsSection />
    </StyledMainScreen>
  );
};

export default Main;
