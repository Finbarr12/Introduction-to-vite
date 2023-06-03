import { useState } from "react";
import styled from "styled-components";

import { useAppSelector } from "../Global/Store";
import { FaWhatsapp } from "react-icons/fa";

const Down = () => {
  const [showHome, setHome] = useState(true);
  const [showChurch, setChurch] = useState(false);
  const [showOffice, setOffice] = useState(false);

  const Product = useAppSelector((State) => State.allProducts);

  const Home = Product.filter((el: any) => el?.Category === "Home");
  const Office = Product.filter((el: any) => el?.Category === "Office");
  const Church = Product.filter((el: any) => el?.Category === "Church");

  const ToggleHome = () => {
    setHome(true);
    setChurch(false);
    setOffice(false);
  };
  const ToggleChurch = () => {
    setHome(false);
    setChurch(true);
    setOffice(false);
  };
  const ToggleOffice = () => {
    setHome(false);
    setChurch(false);
    setOffice(true);
  };

  return (
    <Container>
      <h2>
        <i>Collections</i>
      </h2>
      <Holder>
        <p
          onClick={ToggleHome}
          style={{ borderBottom: showHome ? "1px solid #0f3738" : "" }}
        >
          Home
        </p>
        <p
          onClick={ToggleOffice}
          style={{ borderBottom: showOffice ? "1px solid #0f3738" : "" }}
        >
          Offices
        </p>
        <p
          onClick={ToggleChurch}
          style={{ borderBottom: showChurch ? "1px solid #0f3738" : "" }}
        >
          Church
        </p>
      </Holder>
      {showHome ? (
        <BoxesHold>
          {Home?.map((props: any) => (
            <Box>
              <ImageHold>
                <img src={props?.Image} alt="" />
              </ImageHold>
              <p>{props?.Category} Use</p>
              <h1>{props?.name}</h1>
              <hr />
              <strong>{props?.desc}</strong>
              <br />
              <a
                href={`https://wa.me/${2348131994772}?text=${encodeURIComponent(
                  `${props?.Image}`
                )}`}
              >
                <button>
                  <Icon size={20} />
                  <p> Buy Now</p>
                </button>
              </a>
            </Box>
          ))}
        </BoxesHold>
      ) : null}
      {showOffice ? (
        <BoxesHold>
          {Office?.map((props: any) => (
            <Box>
              <ImageHold>
                <img src={props?.Image} alt="" />
              </ImageHold>
              <p>{props?.Category} Use</p>
              <h1>{props?.name}</h1>
              <hr />
              <strong>{props?.desc}</strong>
              <br />
              <a
                href={`https://wa.me/${2348131994772}?text=${encodeURIComponent(
                  `${props?.Image}`
                )}`}
              >
                <button>
                  <Icon size={20} />
                  <p> Buy Now</p>
                </button>
              </a>
            </Box>
          ))}
        </BoxesHold>
      ) : null}
      {showChurch ? (
        <BoxesHold>
          {Church?.map((props: any) => (
            <Box>
              <ImageHold>
                <img src={props?.Image} alt="" />
              </ImageHold>
              <p>{props?.Category} Use</p>
              <h1>{props?.name}</h1>
              <hr />
              <strong>{props?.desc}</strong>
              <br />
              <a
                href={`https://wa.me/${2348131994772}?text=${encodeURIComponent(
                  `${props?.Image}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>
                  <Icon size={20} />
                  <p> Buy Now</p>
                </button>
              </a>
            </Box>
          ))}
        </BoxesHold>
      ) : null}
    </Container>
  );
};

export default Down;

const Icon = styled(FaWhatsapp)`
  margin-left: 15px;
`;

const ImageHold = styled.div`
  width: 300px;
  height: 200px;
  /* background-color: red; */

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Box = styled.div`
  width: 300px;
  margin-right: 17px;
  margin-top: 30px;
  /* background-color: gold; */

  @media screen and (max-width: 500px) {
    margin: 0;
    margin-top: 20px;
  }
  @media screen and (min-width: 600px) and (max-width: 960px) {
    margin-left: 10px;
    margin-top: 20px;
  }

  a {
    text-decoration: none;
  }

  h1 {
    margin: 0;
    margin-top: 4px;
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
    font-size: 30px;
  }

  p {
    margin: 0;
    margin-top: 5px;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    font-size: 17px;
  }

  strong {
    font-weight: lighter;
    margin-top: 20px;
  }

  button {
    width: 100%;
    height: 35px;
    border-radius: 5px;
    background-color: #0f3738;
    font-size: 16px;
    color: white;
    border: 0;
    margin-top: 15px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    p {
      margin: 0;
      text-decoration: none;
      margin-left: 10px;
    }
  }
`;

const BoxesHold = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const Holder = styled.div`
  display: flex;

  p {
    margin: 20px;
    font-size: 20px;
    font-weight: 900;
    height: 30px;
    cursor: pointer;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h2 {
    margin: 0;
    margin-top: 10px;
    font-size: 60px;

    @media screen and (max-width: 960px) {
      font-size: 29px;
    }
  }
`;
