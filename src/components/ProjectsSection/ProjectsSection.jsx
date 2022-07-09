import styled from "styled-components";
import React from "react";
import ParticlesBackground from "../ParticlesBackground";
import projectsParticlesConfig from "../ParticlesBackground/utils/projects-particlesjs-config";
import ProjectCard from "../ProjectCard";
import maImg from "../../assets/images/meetAssistant.svg";
import tasks from "../../assets/images/tasks.svg";
import tso from "../../assets/images/tso.svg";
import hands from "../../assets/images/hands.svg";
const ProjectSection = styled.section`
  width: 100%;

  display: flex;
  justify-content: center;
  padding-bottom: 5em;
  align-items: center;

  flex-direction: column;
`;
const ProjectsSection = (props) => {
  return (
    <ProjectSection>
      <ParticlesBackground
        position="absolute"
        particlesConfig={projectsParticlesConfig}
      />
      <ProjectCard
        href="https://pabrcno.github.io/react-hands/"
        background="#ff00f332"
        image={hands}
      />
      <ProjectCard
        href="https://pabrcno.github.io/Tasks/"
        background="#fffff332"
        image={tasks}
      />
      <ProjectCard
        href="https://play.google.com/store/apps/details?id=ar.com.sistematis.tso&hl=es_EC"
        background="#300ff332"
        image={tso}
      />
      <ProjectCard
        href="https://chrome.google.com/webstore/detail/google-meet-attendance-en/dfoeddmkpdeheffinggbeggiebnhhmno?hl=es"
        background="#40fff332"
        image={maImg}
      />
    </ProjectSection>
  );
};

export default ProjectsSection;
