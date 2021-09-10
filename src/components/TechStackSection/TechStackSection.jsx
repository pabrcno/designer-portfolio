import React from "react";
import styled from "styled-components";
import TagCloud from "react3dtagcloud";
import ParticlesBackground from "../ParticlesBackground";
import projectsParticlesConfig from "../ParticlesBackground/utils/tech-particlesjs-config";
const StyledSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 95%;
  background: black;
  font-family: "Syncopate-Bold";
  overflow-x: hidden;
  color: white;
  a {
    color: white;
  }
`;

const Column = styled.div`
  width: 50%;

  height: 100%;
  display: flex;
  align-items: center;

  flex-direction: column;
`;

const CloudContainer = styled.span`
  height: 600px;
  color: white;
  a {
    font-family: InputMono;
    pointer-events: none;
    padding: 0 1em;
    background-color: #00efc3a2;
    font-size: x-large;
  }
`;

const StyledTagClod = styled(TagCloud)`
  &:a {
    color: white !important;
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
      <Column>
        <h1
          style={{
            marginBottom: "6em",
            fontSize: "2.2em",
            color: "white",
            zIndex: 1,
            marginLeft: "2em",
          }}
        >
          EDUCATION / TECH STACK
        </h1>

        <CloudContainer>
          <StyledTagClod tagName={educationTags} speed={0.2} radius={200} />
        </CloudContainer>
      </Column>
      <Column>
        <CloudContainer>
          <StyledTagClod tagName={techTags} speed={0.2} radius={200} />
        </CloudContainer>
      </Column>
    </StyledSection>
  );
};

export default TechStackSection;
