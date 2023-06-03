import styled from "styled-components";
import logo from "../Assets/chyrealrm.png";
import { RiFacebookFill } from "react-icons/ri";
import { FaTiktok } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { HiLocationMarker } from "react-icons/hi";
import { IoCallOutline } from "react-icons/io5";
import { GoMail } from "react-icons/go";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <Container>
      <Left>
        <img src={logo} alt="" />
        <p>
          Stay connected with Chy4real Furnitures <br /> through our vibrant
          social media platforms! <br />
          Follow us to embark on a journey of design inspiration, <br /> home
          décor trends, and exclusive offers.
        </p>
        <Holded>
          <a href=" https://web.facebook.com/blessed.chyezeh">
            <Circle>
              <RiFacebookFill style={{ color: "white", fontSize: "24px" }} />
            </Circle>
          </a>

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
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            <div>Home</div>
          </Link>
          <Link to="about" style={{ color: "white", textDecoration: "none" }}>
            <p>About</p>
          </Link>
          <Link
            to="services"
            style={{ color: "white", textDecoration: "none" }}
          >
            <p>Services</p>
          </Link>
          <Link
            to="/products"
            style={{ color: "white", textDecoration: "none" }}
          >
            <p>Products</p>
          </Link>
          <Link
            to="/contact"
            style={{ color: "white", textDecoration: "none" }}
          >
            <p>Contact</p>
          </Link>
        </Held>
        <Held2>
          <h3>Have a question?</h3>
          <Main>
            <HiLocationMarker />
            <strong>
              Suit 211, floor2, Fedan Plaza opp Total Filling station Ojo Alaba
              International Market road, Lagos
            </strong>
          </Main>
          <Main>
            <IoCallOutline />
            <p>+2347038244564</p>
          </Main>
          <Main>
            <GoMail />
            <p>chy4real1982@gmail.com</p>
          </Main>
        </Held2>
      </Right>
    </Container>
  );
};

export default Footer;

const Held2 = styled.div`
  color: white;
  margin-right: 150px;

  @media screen and (max-width: 500px) {
    margin-left: 30px;
  }

  div {
    margin-top: 40px;
  }

  p {
    @media screen and (max-width: 900px) {
      font-size: 15px;
    }
  }

  h3 {
    @media screen and (max-width: 900px) {
      font-size: 20px;
    }
  }
`;

const Main = styled.p`
  display: flex;
  align-items: center;
  margin: 0;
  p {
    margin-left: 10px;
  }

  strong {
    font-weight: lighter;
    @media screen and (max-width: 900px) {
      width: 80%;
      font-size: 14px;
      margin-left: 10px;
    }
  }
`;

const Held = styled.div`
  color: white;
  margin-right: 150px;

  div {
    margin-top: 40px;
  }

  @media screen and (max-width: 500px) {
    margin: 10px;
    margin-left: 30px;
  }
`;

const Right = styled.div`
  margin-top: 80px;
  margin-left: 150px;
  display: flex;

  @media screen and (max-width: 500px) {
    margin: 0;
    display: flex;
    margin-top: 20px;
  }
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

  @media screen and (max-width: 500px) {
    display: block;
    height: 600px;
  }
`;
