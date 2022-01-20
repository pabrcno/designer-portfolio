import React, { useEffect } from "react";
import styled from "styled-components";
import me from "../../assets/images/me.svg";
import Footer from "../../components/Footer";
import Trail from "../../components/Trail/Trail";
import Paper from "@material-ui/core/Paper";
import { isMobile } from "react-device-detect";
const AboutScreen = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  background-color: whitesmoke;
  min-width: 600px;
  align-items: center;
`;

const Scaffold = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(_) => (isMobile ? "90%" : "70%")};
  align-items: ${(_) => (isMobile ? "center" : "flex-start")};
`;

const FirstWords = styled.article`
  font-size: 2.9rem;
  color: #292a2c;

  font-family: InputMono;
`;

const Column = styled.div`
  width: ${(_) => (isMobile ? "100%" : "50%")};
  min-width: 400px;
  display: flex;

  flex-direction: column;
`;
const DescriptionContainer = styled.div`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 6.2em;
`;
const DescriptionBody = styled.article`
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: x-large;
  color: #292a2c;
  margin-bottom: 3em;
  margin-top: -3.5em !important;
`;

const StyledPaper = styled(Paper)`
  background-image: url(${me});
  height: ${(_) => (isMobile ? "600px" : "400px")};
  width: ${(_) => (isMobile ? "600px" : "400px")};
  margin-left: 2em;

  background-position: center;

  margin-bottom: 4em;
`;

const Paragraph = styled.p`
  line-height: 2.6rem;
  margin-bottom: 2em;
`;

const About = (props) => {
  const firstWords = [
    "Meaningful software development ",
    "is a combination of",
    "Creativity, Architecture & Design;",
    "clean code and good practices mean",
    "more space for amazing things to be born.",
  ];
  const description = [
    <Paragraph>
      I come from Trujillo a little town in Venezuela, a pretty place, I started
      software development 3 years ago and I'm very proud of how as an immigrant
      I have gone from being a clerk, to be creating stuff that makes people's
      life better.
    </Paragraph>,
    <Paragraph>
      Through this I like to express what I have in my mind and in the process
      create value. What everyone wants,be useful and helpful.
    </Paragraph>,
    <Paragraph>
      As a software developer my core strength is mix between design, software
      architecture and development. I am tech agnostic and I have demonstrated I
      can learn anything that I feel passionate for.
    </Paragraph>,
    <Paragraph>
      Thanks for being here. We all live in a hurry and if you read this means
      you like my work. Have a nice day!
    </Paragraph>,
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <AboutScreen>
      <Scaffold>
        <Trail open={true}>
          {firstWords.map((line) => (
            <FirstWords>{line}</FirstWords>
          ))}
        </Trail>
        <DescriptionContainer>
          <Column>
            <StyledPaper elevation={24} />
          </Column>

          <Column>
            <DescriptionBody>
              <Trail open={true}>
                {description.map((paragraph) => paragraph)}
              </Trail>
            </DescriptionBody>
          </Column>
        </DescriptionContainer>
      </Scaffold>
      <Footer />
    </AboutScreen>
  );
};

export default About;
