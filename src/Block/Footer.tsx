import React from "react";
import styled from "styled-components";
import logo from "../Assets/chyrealrm.png";
import { RiFacebookFill } from "react-icons/ri";
import { FaTiktok } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { HiLocationMarker } from "react-icons/hi";
import { IoCallOutline } from "react-icons/io5";
import { GoMail } from "react-icons/go";
const Footer = () => {
  return (
    <Container>
      <Left>
        <img src={logo} alt="" />
        <p>
          Far far away, behind the word mountains, far <br /> from the countries
          Vokalia and Consonantia, <br /> there live the blind texts.
        </p>
        <Holded>
          <Circle>
            <RiFacebookFill style={{ color: "white", fontSize: "24px" }} />
          </Circle>
          <Circle>
            <FaTiktok style={{ color: "white", fontSize: "24px" }} />
          </Circle>
          <Circle>
            <GrInstagram style={{ color: "white", fontSize: "24px" }} />
          </Circle>
        </Holded>
      </Left>
      <Right>
        <Held>
          <h3>Links</h3>
          <div>Home</div>
          <p>About</p>
          <p>Services</p>
          <p>Contact</p>
        </Held>
        <Held>
          <h3>Have a question?</h3>
          <Main>
            <HiLocationMarker />
            <p>
              Suit 211, floor2, Fedan Plaza opp Total Filling station <br /> Ojo
              Alaba International Market road, Lagos
            </p>
          </Main>
          <Main>
            <IoCallOutline />
            <p>+2347038244564</p>
          </Main>
          <Main>
            <GoMail />
            <p>chy4real1982@gmail.com</p>
          </Main>
        </Held>
      </Right>
    </Container>
  );
};

export default Footer;

const Main = styled.p`
  display: flex;
  align-items: center;
  margin: 0;
  p {
    margin-left: 10px;
  }
`;

const Held = styled.div`
  color: white;
  margin-right: 150px;

  div {
    margin-top: 40px;
  }
`;

const Right = styled.div`
  margin-top: 80px;
  margin-left: 150px;
  display: flex;
`;

const Holded = styled.div`
  display: flex;
`;

const Circle = styled.div`
  width: 50px;
  height: 50px;
  margin-right: 13px;
  border-radius: 50%;
  background-color: #201f1f;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Left = styled.div`
  margin-left: 15px;
  img {
    height: 75px;
    margin-top: 80px;
  }

  p {
    color: darkgray;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 400px;
  background-color: black;
  display: flex;
  margin-top: 50px;
`;
