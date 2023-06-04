import Perfect from "../Components/Perfect";
import styled from "styled-components";
import table from "../Assets/table2.jpg";
import AllHeros from "../Static/AllHeros";
import pics from "../assets/room.jpg";
import { NavLink } from "react-router-dom";

const Services = () => {
  return (
    <div>
      <AllHeros title="Services" bi={`url(${pics})`} />
      <Container>
        <Image>
          <img src={table} alt="" />
        </Image>
        <Second>
          <h4>SERVICES</h4>
          <Held>
            <h1>
              <i>We Carefully Planned</i>
            </h1>
          </Held>
          <p>
            At Chy4real Furnitures, we believe that furniture should not only be
            functional but also a reflection of your unique personality and
            taste. Our dedicated team is ready to assist you in bringing your
            vision to life, whether through customization options or expert
            advice on selecting the perfect pieces for your space.Indulge in the
            luxury of Chy4real Furnitures and discover furniture that transcends
            time, elevates your surroundings, and creates a lasting impression.
            Step into our hero page and immerse yourself in a world of exquisite
            design and unparalleled craftsmanship.
          </p>
          <p>
            With a passion for design and an unwavering commitment to
            excellence, we curate a collection that encompasses a range of
            styles, from modern minimalism to classic opulence. Every detail is
            thoughtfully considered, from the choice of premium materials to the
            precision of craftsmanship.
          </p>
          <NavLink
            to="/products"
            style={{ color: "white", textDecoration: "none" }}
          >
            <button>Shop with us</button>
          </NavLink>
        </Second>
      </Container>
      <Perfect />
    </div>
  );
};

export default Services;

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
    color: #c5c5c5;

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
