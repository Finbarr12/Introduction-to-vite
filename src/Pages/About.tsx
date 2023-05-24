import React from "react";
import styled from "styled-components";
import Footer from "../Block/Footer";
import Intresting from "../Components/Interesting";
import OurProject from "../Components/OurProject";
import manager from "../Assets/Manager.webp";
import anopics from "../Assets/Finbarr.jpg";
import room from "../Assets/room.jpg";
import AllHeros from "../Static/AllHeros";
import { Fade } from "react-awesome-reveal";
const About = () => {
  return (
    <Fade cascade damping={0.1} triggerOnce>
      <div>
        <AllHeros title="About" />
        <OurProject />
        <Intresting />
        <Container>
          <p>
            <h2>
              <i>Our Team</i>
            </h2>{" "}
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the <br /> blind texts.
            Separated they live in
          </p>
          <Holder>
            <Box>
              <ImgHold>
                <img src={manager} alt="" />
              </ImgHold>
              <h3>
                <i>Ezewugo Chioma</i>
              </h3>
              <p>CEO, Chy4real furnitures</p>
            </Box>
            <Box>
              <ImgHold>
                <img src={anopics} alt="" />
              </ImgHold>
              <h3>
                <i>Ogbonna Finbarr</i>
              </h3>
              <p>Developer, Chy4real furnitures</p>
            </Box>
            <Box>
              <ImgHold>
                <img src={room} alt="" />
              </ImgHold>
              <h3>
                <i>Paul Ikenna</i>
              </h3>
              <p>Artisan, Chy4real furnitures</p>
            </Box>
            <Box>
              <ImgHold>
                <img src={room} alt="" />
              </ImgHold>
              <h3>
                <i>Tunde Olumide</i>
              </h3>
              <p>Vendor,Chy4real furnitures</p>
            </Box>
          </Holder>
        </Container>
      </div>
    </Fade>
  );
};

export default About;

const ImgHold = styled.div`
  width: 100%;
  height: 70%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Box = styled.div`
  /* background-color: red; */
  /* border: 1px solid black; */

  display: flex;
  align-items: center;
  flex-direction: column;

  h3 {
    margin: 0;
  }

  p {
    margin: 0;
    font-size: 18px;
    font-family: Inria serif;
    margin-top: 10px;
  }
`;

const Holder = styled.div`
  width: 90%;
  height: 350px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 350px);
  gap: 17px;
  margin-top: 20px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  h2 {
    font-size: 40px;
    margin: 0;
    margin-top: 40px;
  }
`;
