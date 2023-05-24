import React from "react";
import styled from "styled-components";
import heroimg from "../Assets/home.jpg";
import { Fade } from "react-awesome-reveal";

const Hero = () => {
  return (
    <Container>
      <Wrapper>
        <Fade cascade damping={0.1} triggerOnce>
          <i>The Furniture That Defines You</i>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate{" "}
            <br />
            inventore porro illum incidunt nostrum iure, magni ab.
          </p>
          <Button>Purchase</Button>
        </Fade>
      </Wrapper>
    </Container>
  );
};

export default Hero;

const Wrapper = styled.div`
  width: 100%;
  height: 500px;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Container = styled.div`
  width: 100%;
  height: 500px;
  background-image: url(${heroimg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  position: relative;

  i {
    /* margin: 0; */
    color: white;
    font-size: 68px;
    font-family: Inria serif;
    z-index: 2;
    margin-left: 15px;
    margin-top: 46px;

    @media screen and (max-width: 425px) {
      font-size: 40px;
      text-align: center;
    }
    @media screen and (min-width: 600px) and (max-width: 960px) {
      font-size: 58px;
      text-align: center;
    }
  }
  p {
    color: white;
    text-align: center;

    @media screen and (max-width: 425px) {
      font-size: 12px;
    }
  }
`;

const Button = styled.button`
  width: 150px;
  height: 37px;
  border: none;
  background-color: #0f3738;
  font-size: 16px;
  cursor: pointer;
  color: white;
  border-radius: 5px;

  :hover {
    transform: scale(0.99);
  }
`;
