import styled from "styled-components";
import React from "react";
import ParticlesBackground from "../ParticlesBackground";
import projectsParticlesConfig from "../ParticlesBackground/utils/projects-particlesjs-config";
import ProjectCard from "../ProjectCard";
import maImg from "../../assets/images/meetAssistant.svg";
import tasks from "../../assets/images/tasks.svg";
import tso from "../../assets/images/tso.svg";
const ProjectSection = styled.section`
  width: 100%;

  display: flex;
  justify-content: center;
  padding-bottom: 5em;
  align-items: center;
  background-color: black;
  flex-direction: column;
`;
const ProjectsSection = (props) => {
  return (
    <ProjectSection>
      <ProjectCard background="rgba(240,240,240)" image={tasks} />
      <ProjectCard background="rgba(255,200,255)" image={tso} />
      <ProjectCard background="rgba(57,121,107)" image={maImg} />
    </ProjectSection>
  );
};

export default ProjectsSection;
