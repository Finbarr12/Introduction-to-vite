import { useState } from "react";
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
          to="/products"
          style={({ isActive }) => {
            return {
              background: isActive ? "#0F3738" : "",
              textDecoration: "none",
              color: isActive ? "white" : "",
              height: "60%",
            };
          }}
        >
          <Navs>Products</Navs>
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
      {show ? (
        <Dropdwn>
          <NavLink
            to="/"
            onClick={Toggle}
            style={{ color: "black", textDecoration: "none" }}
          >
            <p>Home</p>
          </NavLink>
          <NavLink
            to="/products"
            onClick={Toggle}
            style={{ color: "black", textDecoration: "none" }}
          >
            <p>Products</p>
          </NavLink>
          <NavLink
            to="/about"
            onClick={Toggle}
            style={{ color: "black", textDecoration: "none" }}
          >
            <p>About</p>
          </NavLink>
          <NavLink
            to="/services"
            onClick={Toggle}
            style={{ color: "black", textDecoration: "none" }}
          >
            <p>Services</p>
          </NavLink>
          <NavLink
            to="/contact"
            onClick={Toggle}
            style={{ color: "black", textDecoration: "none" }}
          >
            <p>Contact</p>
          </NavLink>
        </Dropdwn>
      ) : null}
    </Container>
  );
};

export default Header;

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
  height: 235px;
  background-color: white;
  position: absolute;
  top: 100%;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

  p {
    width: 100%;
    height: 30px;
    border-bottom: 1px solid lightgray;
    display: flex;
    align-items: center;
    justify-content: center;
  }
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
  top: 0px;
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
