import React, { useEffect } from "react";
import styled from "styled-components";
import me from "../../assets/images/me.svg";
import Footer from "../../components/Footer";
import Trail from "../../components/Trail/Trail";
import Paper from "@material-ui/core/Paper";
import { isMobile } from "react-device-detect";
const trujilloMapsLink =
  "https://www.google.com.ar/maps/place/Trujillo+3150,+Trujillo,+Venezuela/@9.3708915,-70.4566849,14z/data=!3m1!4b1!4m5!3m4!1s0x8e62d52cdedb7061:0xd954f16fe4624329!8m2!3d9.3564497!4d-70.4372404";
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
  a {
    color: #20ccc3;
    text-decoration: none;
  }
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
      I come from
      <a href={trujilloMapsLink} target="_blank" rel="noopener noreferrer">
        {" "}
        Trujillo a little town in Venezuela
      </a>
      , I love creating software that makes people's life better.
    </Paragraph>,
    <Paragraph>
      For me software is a creative experience that allows me to express ideas.
    </Paragraph>,
    <Paragraph>
      As a software developer my core strength is mix between design, software
      architecture and development. I am tech agnostic, AI enthusiast and
      passionate about technology and how symbiotic we are with it.
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
