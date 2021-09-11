import React, { useEffect } from "react";
import styled from "styled-components";
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
const Subtitle = styled.h2`
  color: white;
  z-index: 1;
  font-size: 2em;
  font-family: Syncopate-Bold;
  text-decoration: underline;
  cursor: pointer;
  transition: font-size 1s ease;
  margin-bottom: 2em;
  margin-left: 2em;
  &:hover {
    font-size: 2.1em;
  }
  &:active {
    font-size: 2em;
  }
  a {
    color: white;
  }
`;
const Portfolio = (props) => {
  useEffect(() => {
    window.scrollTo(0, 70);
  }, []);
  return (
    <StyledPortfolioScreen>
      <StartingSection />
      <ProjectsSection />
      <TechStackSection />
      <Subtitle>
        <a href="mailto:pabrcn@gmail.com">contact me</a>
      </Subtitle>
      <Footer />
    </StyledPortfolioScreen>
  );
};

export default Portfolio;
