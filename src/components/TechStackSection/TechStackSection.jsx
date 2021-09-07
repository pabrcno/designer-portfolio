import React from "react";
import styled from "styled-components";
import TagCloud from "TagCloud";

const StyledSection = styled.section`
  width: 100vw;
  max-width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  flex-direction: column;
`;
const TechStackSection = (props) => {
  const container = ".tagcloud";
  const texts = [
    "3D",
    "TagCloud",
    "JavaScript",
    "CSS3",
    "Animation",
    "Interactive",
    "Mouse",
    "Rolling",
    "Sphere",
    "6KB",
    "v2.x",
  ];
  const options = {};
  return <StyledSection>{TagCloud(container, texts, options)}</StyledSection>;
};

export default TechStackSection;
