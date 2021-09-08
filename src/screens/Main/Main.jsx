import React from "react";
import styled from "styled-components";
import NavBar from "../../components/NavBar/NavBar";

import ProjectsSection from "../../components/ProjectsSection/ProjectsSection";
import StartingSection from "../../components/StartingSection";
import TechStackSection from "../../components/TechStackSection/TechStackSection";
import Footer from "../../components/Footer";
import PageViewer from "../../components/PageViewer/PageViewer";
import Portfolio from "../Portfolio/Portfolio";
const StyledMainScreen = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
  min-width: 600px;
  cursor: pointer;
`;

const Main = (props) => {
  return (
    <StyledMainScreen>
      <NavBar />
      <Portfolio />
    </StyledMainScreen>
  );
};

export default Main;
