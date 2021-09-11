import React from "react";

import styled from "styled-components";

const Card = styled.div`
  display: flex;
  max-height: 800px;
  margin-top: 2em;
  width: 40%;
  min-width: 500px;

  background: ${(props) => `rgba(80, 80, 80, 0.2)`};
  z-index: 1;
  cursor: pointer;
  padding: 2em;
  transition: all 700ms ease;
  &:hover {
    background: ${(props) => props.background};
    width: 45%;
  }
  img {
    transition: all 1s ease;
    opacity: 0.8;

    &:hover {
      transition: all 1s ease;
      height: 99%;
      opacity: 1;
    }
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
