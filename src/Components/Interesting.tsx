import styled from "styled-components";
import Countup from "react-countup";
import { Fade } from "react-awesome-reveal";
const Intresting = () => {
  return (
    <Container>
      <Fade triggerOnce delay={1000}>
        <Main>
          <h4>SOME</h4>
          <h2>Interesting Facts</h2>
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
      </Fade>
    </Container>
  );
};

export default Intresting;

// yo ejeghj

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

    @media screen and (max-width: 900px) {
      font-size: 15px;
    }
  }

  h3 {
    margin: 0;
    font-size: 45px;

    @media screen and (max-width: 900px) {
      font-size: 29px;
    }
  }
`;

const Facts = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 800px;
  height: 200px;
  margin-left: 90px;

  @media screen and (max-width: 500px) {
    margin: 0;
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
    margin-top: 25px;
  }
  @media screen and (min-width: 600px) and (max-width: 1000px) {
    margin-left: 0;
  }
`;

const Main = styled.div`
  h4 {
    margin: 0;
    color: #c5c5c5;

    @media screen and (max-width: 900px) {
      margin: 0;
      margin-bottom: 10px;
      margin-top: 20px;
    }
  }

  h2 {
    margin: 0;
    font-size: 40px;
    font-family: Inria serif;

    @media screen and (max-width: 900px) {
      font-size: 24px;
    }
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

  @media screen and (max-width: 900px) {
    flex-direction: column;
    margin-top: 20px;
    height: 300px;
  }
`;
