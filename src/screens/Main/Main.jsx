import React from "react";
import styled from "styled-components";
import NavBar from "../../components/NavBar/NavBar";
import { Switch, Route } from "react-router-dom";
import "./style/transition.css";
import Portfolio from "../Portfolio/Portfolio";
import About from "../About";

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
    <>
      <StyledMainScreen>
        <NavBar />

        <Switch>
          <Route exact path="/" component={Portfolio} />
          <Route exact path="/about" component={About} />
        </Switch>
      </StyledMainScreen>
    </>
  );
};

export default Main;
