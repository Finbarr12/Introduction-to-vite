import React, { useState } from "react";
import styled from "styled-components";
import logo from "../Assets/BusinessLogo.png";
import { AiOutlineMenu } from "react-icons/ai";
import { NavLink } from "react-router-dom";
const Header = () => {
  const [show, setShow] = useState(false);

  const Toggle = () => {
    setShow(!show);
  };
  return (
    <Container>
      <img src={logo} />

      <Holder>
        <NavLink
          to="/"
          style={({ isActive }) => {
            return {
              background: isActive ? "#0F3738" : "",
              textDecoration: "none",
              color: isActive ? "white" : "",
              height: "60%",
            };
          }}
        >
          <Navs>Home</Navs>
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) => {
            return {
              background: isActive ? "#0F3738" : "",
              textDecoration: "none",
              color: isActive ? "white" : "",
              height: "60%",
            };
          }}
        >
          <Navs>About</Navs>
        </NavLink>
        <NavLink
          to="/services"
          style={({ isActive }) => {
            return {
              background: isActive ? "#0F3738" : "",
              textDecoration: "none",
              color: isActive ? "white" : "",
              height: "60%",
            };
          }}
        >
          <Navs>Services</Navs>
        </NavLink>
        <NavLink
          to="/contact"
          style={({ isActive }) => {
            return {
              background: isActive ? "#0F3738" : "",
              textDecoration: "none",
              color: isActive ? "white" : "",
              height: "60%",
            };
          }}
        >
          <Navs>Contact</Navs>
        </NavLink>
      </Holder>

      <IconHold onClick={Toggle}>
        <AiOutlineMenu />
      </IconHold>
      {show ? <Dropdwn></Dropdwn> : null}
    </Container>
  );
};

export default Header;

const Button = styled(NavLink)`
  text-decoration: none;
  color: white;
  width: 110px;
  height: 35px;
  border: none;
  background-color: #0f3738;
  display: flex;
  align-items: center;
  justify-content: center;

  margin-left: 15px;
  font-size: 15px;
  cursor: pointer;
  border-radius: 5px;
  color: white;
  :hover {
    transform: scale(0.99);
  }
`;

const Navs = styled.div`
  text-decoration: none;
  /* color: black; */
  margin: 15px;
  height: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Dropdwn = styled.div`
  width: 100%;
  height: 450px;
  background-color: white;
  position: absolute;
  top: 102%;
`;

const IconHold = styled.div`
  font-size: 23px;
  display: none;
  margin-right: 29px;
  @media screen and (max-width: 960px) {
    display: flex;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 60px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 2;
  position: sticky;
  top: 0%;
  box-shadow: rgba(141, 136, 136, 0.24) 0px 3px 8px;
  z-index: 45;
  img {
    height: 73px;
  }
`;

const Holder = styled.div`
  display: flex;
  color: black;
  text-transform: uppercase;
  margin-right: 29px;
  @media screen and (max-width: 960px) {
    display: none;
  }
  p {
    margin: 15px;
  }
`;

const ButHold = styled.div`
  display: flex;
  margin-right: 29px;
  @media screen and (max-width: 960px) {
    display: none;
  }
`;
