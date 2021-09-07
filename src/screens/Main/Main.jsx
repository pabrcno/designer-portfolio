import React, { useRef } from "react";
import styled from "styled-components";
import NavBar from "../../components/NavBar/NavBar";
import { useSpring, config } from "react-spring";
import ProjectsSection from "../../components/ProjectsSection/ProjectsSection";
import StartingSection from "../../components/StartingSection";
import TechStackSection from "../../components/TechStackSection/TechStackSection";

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
  const scrollDestinationRef = useRef();
  const [y, setY] = useSpring(() => ({
    immediate: false,
    y: 0,
    onFrame: (props) => {
      window.scroll(0, props.y);
    },
    config: config.slow,
  }));
  return (
    <StyledMainScreen>
      <NavBar />
      <StartingSection
        setY={setY}
        scrollDestinationRef={scrollDestinationRef}
      />
      <Scaffold />
      <div ref={scrollDestinationRef} />
      <ProjectsSection />
      <TechStackSection />
    </StyledMainScreen>
  );
};

export default Main;
