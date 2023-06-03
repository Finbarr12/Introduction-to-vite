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
        <strong>
          At Chy4real Furnitures, we take pride in our diverse portfolio of
          projects that showcase our expertise, innovation, and commitment to
          excellence.
        </strong>
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

  @media screen and (max-width: 900px) {
    margin-top: 19px;
    grid-template-rows: repeat(4, 1fr);
    grid-template-columns: none;
    height: 700px;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 130px;

  @media screen and (max-width: 900px) {
    margin-top: 20px;
  }

  h1 {
    margin: 0;
    font-size: 28px;
  }
  p {
    margin: 0;

    strong {
      font-weight: lighter;
      width: 90%;

      @media screen and (max-width: 900px) {
        font-size: 16px;
        text-align: center;
      }
    }
    @media screen and (max-width: 900px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
`;
