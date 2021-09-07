import React from "react";
import styled from "styled-components";
import TagCloud from "react3dtagcloud";
import ParticlesBackground from "../ParticlesBackground";
import projectsParticlesConfig from "../ParticlesBackground/utils/projects-particlesjs-config";
const StyledSection = styled.section`
  width: 100%;
  min-width: 100%;
  height: 800px;
  display: flex;
  align-items: center;

  background: black;
  font-family: "Syncopate-Bold";
`;

const Column = styled.div`
  width: 50%;

  height: 100%;
  display: flex;
  align-items: center;

  flex-direction: column;
`;

const CloudContainer = styled.span`
  a {
    pointer-events: none;
  }
`;

const TechStackSection = (props) => {
  const techTags = [
    "JS",
    "ES6",
    "Flutter",
    "React.js",
    "Systems Architecture",
    "Redux.js",
    "Jest",
    "Algorithms",
    "Creative Process",
    "Typescript",
    "Enzyme",
    "react-spring",
    "Chrome Extensions",
    "Dart",
    "Graphic Design",
    "Design Patterns",
    "OOP",
    "TDD",
    "DDD",
    "FireBase",
    "SOLID",
  ];
  const educationTags = [
    "Harvard CS50",
    "Clean architecture",
    "Clean Code",
    "Programming Principles",
    "Information Systems Engineering",
    "Xtreme Programing",
    "UTN",
    "Design principles",
    "Business Management",
  ];

  return (
    <StyledSection>
      <ParticlesBackground
        background=" black"
        particlesConfig={projectsParticlesConfig}
      />
      <Column>
        <h1
          style={{
            marginBottom: "6em",
            fontSize: "2.2em",
            color: "whitesmoke",
            zIndex: 1,
          }}
        >
          EDUCATION
        </h1>

        <CloudContainer>
          <TagCloud
            tagName={educationTags}
            speed={0.1}
            radius={200}
            style={{ pointerEvent: "none" }}
          />
        </CloudContainer>
      </Column>
      <Column>
        <h1
          style={{
            marginBottom: "6em",
            fontSize: "2.2em",
            color: "whitesmoke",
            zIndex: 1,
          }}
        >
          TECH STACK
        </h1>

        <CloudContainer>
          <TagCloud
            tagName={techTags}
            speed={0.1}
            radius={200}
            style={{ pointerEvent: "none" }}
          />
        </CloudContainer>
      </Column>
    </StyledSection>
  );
};

export default TechStackSection;
