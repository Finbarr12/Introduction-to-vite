import styled from "styled-components";
import heroimg from "../Assets/home.jpg";
import { Fade } from "react-awesome-reveal";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <Container>
      <Wrapper>
        <Fade
          triggerOnce
          delay={1000}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <i>The Furniture That Defines You</i>

          <p>
            Each meticulously crafted piece tells a story of artistry, quality,
            and sophistication. From luxurious sofas that envelop you in comfort
            to exquisite dining sets that invite memorable gatherings, our
            furniture transforms spaces into havens of style and refinement.
          </p>
          <Button to="/products">Purchase</Button>
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
      width: 80%;
    }
  }
  p {
    color: white;
    text-align: center;
    width: 60%;

    @media screen and (max-width: 425px) {
      font-size: 12px;
      width: 80%;
    }
    @media screen and (min-width: 600px) and (max-width: 960px) {
      font-size: 15px;
      width: 80%;
    }
  }
`;

const Button = styled(NavLink)`
  width: 150px;
  height: 37px;
  border: none;
  background-color: #0f3738;
  font-size: 16px;
  cursor: pointer;
  color: white;
  border-radius: 5px;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    transform: scale(0.99);
  }
`;
