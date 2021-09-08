import React from "react";
import styled from "styled-components";
import NavBar from "../../components/NavBar/NavBar";

import ProjectsSection from "../../components/ProjectsSection/ProjectsSection";
import StartingSection from "../../components/StartingSection";
import TechStackSection from "../../components/TechStackSection/TechStackSection";

const StyledMainScreen = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
  min-width: 600px;
`;
const Scaffold = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
`;

const Main = (props) => {
  return (
    <StyledMainScreen>
      <NavBar />
      <StartingSection />
      <ProjectsSection />
      <TechStackSection />
    </StyledMainScreen>
  );
};

export default Main;
