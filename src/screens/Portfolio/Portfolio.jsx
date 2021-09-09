import React from "react";
import styled from "styled-components";
import NavBar from "../../components/NavBar/NavBar";

import ProjectsSection from "../../components/ProjectsSection/ProjectsSection";
import StartingSection from "../../components/StartingSection";
import TechStackSection from "../../components/TechStackSection/TechStackSection";
import Footer from "../../components/Footer";
const StyledPortfolioScreen = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
  min-width: 600px;
`;

const Portfolio = (props) => {
  return (
    <StyledPortfolioScreen>
      <StartingSection />
      <ProjectsSection />
      <TechStackSection />
      <Footer />
    </StyledPortfolioScreen>
  );
};

export default Portfolio;
