import React from "react";
import styled from "styled-components";
// import heroimg from "../Assets/home.jpg";

interface IProps {
  title?: string;
  bi: string;
}

const AllHeros: React.FC<IProps> = ({ title, bi }) => {
  return (
    <Container bi={bi}>
      <Wrapper>
        <i>{title}</i>
      </Wrapper>
    </Container>
  );
};

export default AllHeros;

const Wrapper = styled.div`
  width: 100%;
  height: 500px;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Container = styled.div<{ bi: string }>`
  width: 100%;
  height: 500px;
  background-image: ${({ bi }) => bi};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  position: relative;

  @media screen and (max-width: 960px) {
    height: 300px;
  }

  i {
    /* margin: 0; */
    color: white;
    font-size: 98px;
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
    }
  }
`;
