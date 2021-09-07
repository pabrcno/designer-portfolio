import React from "react";

import styled from "styled-components";

const Card = styled.div`
  display: flex;
  max-height: 600px;
  margin-top: 2em;
  width: 60%;
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

const PresentationCard = ({ image, background }) => {
  return (
    <Card elevation="5" background={background}>
      <img src={image} height="100%" width="100%" alt="project" />
    </Card>
  );
};

export default PresentationCard;
