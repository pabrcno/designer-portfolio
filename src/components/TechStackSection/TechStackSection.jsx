import React from "react";
import styled from "styled-components";
import TagCloud from "react3dtagcloud";
import ParticlesBackground from "../ParticlesBackground";
import projectsParticlesConfig from "../ParticlesBackground/utils/tech-particlesjs-config";
const StyledSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 80%;
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
  height: 600px;

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
      <Column>
        <h1
          style={{
            marginBottom: "6em",
            fontSize: "2.2em",
            color: "#37a3a2",
            zIndex: 1,
          }}
        >
          EDUCATION / TECH STACK
        </h1>

        <CloudContainer>
          <TagCloud
            tagName={educationTags}
            speed={0.2}
            radius={200}
            style={{ pointerEvent: "none", overflowx: "hidden" }}
          />
        </CloudContainer>
      </Column>
      <Column>
        <CloudContainer>
          <TagCloud
            tagName={techTags}
            speed={0.2}
            radius={200}
            style={{ pointerEvent: "none", overflowx: "hidden" }}
          />
        </CloudContainer>
      </Column>
    </StyledSection>
  );
};

export default TechStackSection;
