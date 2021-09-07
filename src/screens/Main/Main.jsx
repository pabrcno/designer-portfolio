import React from "react";
import styled from "styled-components";
import NavBar from "../../components/NavBar/NavBar";

import ProjectsSection from "../../components/ProjectsSection/ProjectsSection";
import StartingSection from "../../components/StartingSection";

const StyledMainScreen = styled.div`
  width: 98vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: visible;
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
      <Scaffold />
      <ProjectsSection />
    </StyledMainScreen>
  );
};

export default Main;
