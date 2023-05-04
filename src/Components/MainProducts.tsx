import React from "react";
import styled from "styled-components";
import pics from "../Assets/pics.jpg";
import table from "../Assets/table.jpg";
import living from "../Assets/living.jpg";
import room from "../Assets/room.jpg";
const MainProducts = () => {
  return (
    <Container>
      <p>
        <h1>
          <i>Our Projects</i>
        </h1>
        A small river named Duden flows by their place and supplies it with the
        necessary regelialia. It is a <br /> paradisematic country, in which
        roasted parts of sentences
      </p>

      <Holder>
        <Cards>
          <img src={pics} alt="" />
        </Cards>
        <Cards>
          <img src={room} alt="" />
        </Cards>
        <Cards>
          <img src={table} alt="" />
        </Cards>
        <Cards>
          <img src={living} alt="" />
        </Cards>
      </Holder>
    </Container>
  );
};

export default MainProducts;

const Cards = styled.div`
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    :hover {
      transform: scale(1.1);
      transition: all 2000ms;
    }
  }
`;

const Holder = styled.div`
  width: 100%;
  height: 500px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 500px);
  /* background-color: gold; */

  margin-top: 80px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 130px;

  h1 {
    margin: 0;
    font-size: 28px;
  }
  p {
    margin: 0;
  }
`;
