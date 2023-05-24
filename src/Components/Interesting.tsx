import React from "react";
import styled from "styled-components";
import Countup from "react-countup";
const Intresting = () => {
  return (
    <Container>
      <Main>
        <h4>SOME</h4>
        <h2>
          Interesting <br /> Facts
        </h2>
      </Main>
      <Facts>
        <Fact>
          <h3>
            <Countup start={0} end={18} duration={5} />
          </h3>

          <p>Years experience</p>
        </Fact>
        <Fact>
          <h3>
            <Countup start={-1000} end={371} duration={5} />
          </h3>
          <p>Happy Clients</p>
        </Fact>
        <Fact>
          <h3>
            <Countup start={-1000} end={150} duration={5} />
          </h3>
          <p>Finished Projects</p>
        </Fact>
        <Fact>
          <h3>
            <Countup start={-1000} end={230} duration={5} />
          </h3>
          <p>Working days</p>
        </Fact>
      </Facts>
    </Container>
  );
};

export default Intresting;

const Fact = styled.div`
  /* background-color: green; */
  /* border: 1px solid gold; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  p {
    margin: 0;
    font-size: 18px;
    color: #c5c5c5;
  }

  h3 {
    margin: 0;
    font-size: 45px;
  }
`;

const Facts = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 800px;
  height: 200px;
  margin-left: 90px;
`;

const Main = styled.div`
  h4 {
    margin: 0;
    color: #c5c5c5;
  }

  h2 {
    margin: 0;
    font-size: 40px;
    font-family: Inria serif;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 250px;
  background-color: black;
  margin-bottom: 15px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;
