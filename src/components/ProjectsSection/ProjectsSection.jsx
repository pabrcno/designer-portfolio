import styled from "styled-components";
import React from "react";
import ParticlesBackground from "../ParticlesBackground";
import projectsParticlesConfig from "../ParticlesBackground/utils/projects-particlesjs-config";
import ProjectCard from "../ProjectCard";
import maImg from "../../assets/images/meetAssistant.svg";
import tasks from "../../assets/images/tasks.svg";
const ProjectSection = styled.section`
  width: 100vw;
  max-width: 100vw;
  display: flex;
  justify-content: center;
  z-index: 0;
  margin-top: 2em;
  align-items: center;
  background-color: black;
  flex-direction: column;
`;
const ProjectsSection = (props) => {
  return (
    <ProjectSection>
      <ParticlesBackground
        background=" black"
        particlesConfig={projectsParticlesConfig}
      />

      <ProjectCard background="rgba(57,121,107,0.5)" image={maImg} />
      <ProjectCard background="rgba(240,240,240,0.5)" image={tasks} />
    </ProjectSection>
  );
};

export default ProjectsSection;
