import styled from "styled-components";
import best from "../Assets/best.jpg";
import { NavLink } from "react-router-dom";

const OurProject = () => {
  return (
    <Container>
      <Image>
        <img src={best} alt="" />
      </Image>
      <Second>
        <h4>ABOUT</h4>
        <Held>
          <h1>
            <i>We are the best interior Furniture designs in Nigeria</i>
          </h1>
        </Held>
        <p>
          At Chy4real Furnitures, we pride ourselves on providing high-quality
          and stylish furniture pieces that enhance the beauty and functionality
          of your space. Our furniture is meticulously crafted to meet the
          highest standards of design and durability. Whether you're furnishing
          your home, office, or any other commercial space, we have a wide range
          of options to suit your taste and requirements.
        </p>
        <p>
          Discover our exquisite collection of furniture that combines elegance,
          functionality, and exceptional craftsmanship. Upgrade your space with
          our stylish and durable pieces.we take pride in our meticulous
          attention to detail and commitment to quality. Each furniture piece is
          thoughtfully crafted to ensure superior design and long-lasting
          durability.
        </p>
        <NavLink
          to="/products"
          style={{ color: "white", textDecoration: "none" }}
        >
          <button>Shop with us</button>
        </NavLink>
      </Second>
    </Container>
  );
};

export default OurProject;

const Held = styled.div`
  border-bottom: 1px solid #126668;
`;

const Second = styled.div`
  margin-right: 40px;

  width: 700px;
  /* background-color: red; */

  @media screen and (max-width: 900px) {
    width: 90%;
    /* height: 300px; */
    margin: 0;
  }

  p {
    margin-left: 70px;
    color: darkgray;
    @media screen and (max-width: 900px) {
      margin: 0;
      line-height: 1.5rem;
      margin-top: 10px;
    }
  }
  h4 {
    margin: 0;
    color: #c5c5c5;
    margin-bottom: 5px;
    margin-left: 70px;

    @media screen and (max-width: 900px) {
      margin: 0;
      margin-bottom: 5px;
      margin-top: 20px;
    }
  }

  h1 {
    margin: 0;
    font-size: 30px;
    margin-left: 70px;
    margin-bottom: 15px;
    width: 70%;

    @media screen and (max-width: 900px) {
      margin: 0%;
      width: 90%;
      font-size: 29px;
      margin-bottom: 10px;
    }
  }

  button {
    margin-left: 70px;
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

    @media screen and (max-width: 900px) {
      margin: 0;
      margin-top: 20px;
    }
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;

  /* justify-content: space-between; */
  margin-top: 100px;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Image = styled.div`
  width: 600px;
  height: 450px;
  margin-left: 40px;
  overflow: hidden;

  @media screen and (max-width: 900px) {
    width: 90%;
    height: 300px;
    margin: 0;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
