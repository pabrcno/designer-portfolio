import styled from "styled-components";
import React from "react";
import ParticlesBackground from "../ParticlesBackground";
import projectsParticlesConfig from "../ParticlesBackground/utils/projects-particlesjs-config";
const ProjectSection = styled.section`
  color: red;
  height: 1000px;
  width: 100vw;
  z-index: -1;
`;

const ProjectsSection = (props) => {
  return (
    <ProjectSection>
      <ParticlesBackground
        background=" linear-gradient(0deg, rgba(183,183,183,1) 6%, rgba(0,0,0,1) 85%);"
        particlesConfig={projectsParticlesConfig}
      />
    </ProjectSection>
  );
};

export default ProjectsSection;
