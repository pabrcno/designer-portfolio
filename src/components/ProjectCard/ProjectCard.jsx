import React from "react";

import styled from "styled-components";

const Card = styled.div`
  display: flex;
  max-height: 800px;
  margin-top: 2em;
  width: 50%;
  min-width: 500px;

  background: ${(props) => `rgba(80, 80, 80, 0.2)`};
  backdrop-filter: blur(2px);
  cursor: pointer;
  padding: 2em;
  transition: background 1s ease;
  &:hover {
    background: ${(props) => props.background};
  }
`;

const PresentationCard = ({ image, background, href = "" }) => {
  return (
    <Card elevation="5" background={background}>
      <a href={href}>
        <img src={image} height="100%" width="100%" alt="project" />
      </a>
    </Card>
  );
};

export default PresentationCard;
