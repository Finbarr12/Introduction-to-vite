import styled from "styled-components";
import homes from "../Assets/homes.jpg";
import { NavLink } from "react-router-dom";
const Perfect = () => {
  return (
    <Container>
      <Image>
        <img src={homes} alt="" />
      </Image>
      <Second>
        <h4>PERFECT</h4>
        <Held>
          <h1>
            <i>We Make Perfection</i>
          </h1>
        </Held>
        <p>
          At Chy4real Furnitures, we believe in providing a seamless and
          delightful shopping experience. Our knowledgeable and friendly staff
          are always ready to assist you, whether you need guidance in choosing
          the right furniture or require after-sales support. We strive to
          exceed your expectations and make your furniture shopping journey
          enjoyable.We understand that furniture is not just about
          functionality; it's also a reflection of your personal style. That's
          why we offer a diverse collection of furniture designs to cater to
          various aesthetics. Whether you prefer modern and minimalistic or
          classic and ornate, we have furniture that will complement your space
          perfectly.
        </p>
        <p>
          Enjoy affordable luxury with Chy4real Furnitures. Our competitively
          priced collection allows you to bring high-quality furniture into your
          home without breaking the bank. Experience the perfect blend of
          comfort and aesthetics with our ergonomically designed furniture. From
          cozy sofas to ergonomic office chairs, we prioritize your comfort
          without compromising on style.
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

export default Perfect;

const Held = styled.div`
  border-bottom: 1px solid #126668;
`;

const Second = styled.div`
  margin-left: 40px;

  width: 700px;
  /* background-color: red; */

  @media screen and (max-width: 900px) {
    width: 90%;
    margin: 0;
  }

  p {
    margin-right: 70px;
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
      margin-bottom: 10px;
    }
  }

  h1 {
    margin: 0;
    font-size: 30px;
    margin-left: 70px;
    margin-bottom: 15px;

    @media screen and (max-width: 900px) {
      margin: 0;
      margin-bottom: 10px;
    }
  }

  button {
    margin-right: 70px;
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
      margin-top: 20px;
    }
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  /* justify-content: space-between; */
  margin-top: 100px;

  @media screen and (max-width: 900px) {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
  }
`;

const Image = styled.div`
  width: 600px;
  height: 450px;
  margin-right: 40px;
  overflow: hidden;

  @media screen and (max-width: 900px) {
    width: 90%;
    height: 300px;
    margin: 0;
    margin-top: 20px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
