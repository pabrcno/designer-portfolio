import React from "react";
import styled from "styled-components";
import TagCloud from "react3dtagcloud";

import { isMobile } from "react-device-detect";
const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  width: 95%;
  background: black;
  margin-right: 3em;
  font-family: "Syncopate-Bold";
  padding: 0 20%;
  justify-content: center;
  color: white;
  a {
    font-size: 0.5em;
    color: white;
  }
`;

const CloudContainer = styled.span`
  height: 600px;
  color: white;
  margin-top: 10em;
  a {
    font-size: 1em;
    pointer-events: none;
  }
`;

const TechStackTitle = styled.h1`
  font-size: 3.5em;
  text-decoration: underline;
`;

const StyledTagClod = styled(TagCloud)`
  margin-top: 10em;
`;

const TechStackSection = (props) => {
  const techTags = [
    "Flutter",
    "React.js",
    "Systems Architecture",
    "Redux.js",
    "Creative Process",
    "Typescript",
    "Chrome Extensions",
    "Dart",
    "Clean architecture",
    "Information Systems Engineering",
    "JAVA",
    "Spring",
    "FireBase",
    "TDD",
    "CI/CD",
    "Git",
    "Agile",
    "THREE.js",
  ];

  return (
    <StyledSection>
      <TechStackTitle>TECH STACK</TechStackTitle>

      <CloudContainer>
        <StyledTagClod tagName={techTags} speed={0.3} radius={250} />
      </CloudContainer>
    </StyledSection>
  );
};

export default TechStackSection;
