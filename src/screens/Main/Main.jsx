import React, { useContext } from "react";
import styled from "styled-components";
import NavBar from "../../components/NavBar/NavBar";
import { Switch, Route, useLocation } from "react-router-dom";

import Portfolio from "../Portfolio/Portfolio";
import About from "../About";
import { useTransition, animated } from "react-spring";
import transitions from "@material-ui/core/styles/transitions";
const StyledMainScreen = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
  min-width: 600px;
  cursor: pointer;
`;

const Main = () => {
  return (
    <StyledMainScreen>
      <NavBar />

      <Switch>
        <Route exact path="/" component={Portfolio} />
        <Route exact path="/about" component={About} />
      </Switch>
    </StyledMainScreen>
  );
};

export default Main;
