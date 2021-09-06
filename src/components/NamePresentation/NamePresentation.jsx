import React, { useState } from "react";
import styled from "styled-components";
import { useTrail, a } from "@react-spring/web";
import Trail from "../Trail/Trail";

const NameHolder = styled.span`
  font-size: ${(props) => (props.isWindowSmall ? "1.8em" : "2.2em")};
  color: whitesmoke;
  font-weight: 950;

  font-family: Syncopate-Bold;
  letter-spacing: 1px;
  max-width: 80%;
  margin: 0;
  h1 {
    margin: 0;
    padding: 0;
  }
`;

const NamePresentation = ({ textList }) => {
  const [open, set] = useState(true);
  return (
    <Trail open={open}>
      {textList.map((text) => (
        <NameHolder key={text}>
          <h1>{text}</h1>
        </NameHolder>
      ))}
    </Trail>
  );
};

export default NamePresentation;
