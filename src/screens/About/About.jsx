import React from "react";
import styled from "styled-components";
import me from "../../assets/images/me.svg";
import Footer from "../../components/Footer";
import Trail from "../../components/Trail/Trail";
import Paper from "@material-ui/core/Paper";
const AboutScreen = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  background-color: whitesmoke;
  min-width: 600px;
  align-items: center;
`;

const Scaffold = styled.div`
  width: 70%;
`;

const FirstWords = styled.article`
  font-size: 2.9rem;
  color: #292a2c;

  font-family: InputMono;
`;

const Column = styled.div`
  width: 50%;
  min-width: 400px;
  display: flex;

  flex-direction: column;
`;
const DescriptionContainer = styled.div`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 4em;
`;
const DescriptionBody = styled.article`
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: x-large;
  color: #292a2c;
`;

const StyledPaper = styled(Paper)`
  background-image: url(${me});
  height: 400px;
  width: 400px;
  margin-left: 2em;
  background-position: center;
  transition: opacity 0.3s linear 2s;
`;

const Paragraph = styled.p`
  line-height: 2rem;
`;

const About = (props) => {
  const firstWords = [
    "Complete software development combines",
    "Creativity, Architecture & Design, ",
    "clean code and good practices mean",
    "more space for amazing things to be born.",
  ];
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
              <Paragraph></Paragraph>
            </DescriptionBody>
          </Column>
        </DescriptionContainer>
      </Scaffold>
      <Footer />
    </AboutScreen>
  );
};

export default About;
