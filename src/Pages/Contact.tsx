import styled from "styled-components";

import AllHeros from "../Static/AllHeros";
const Contact = () => {
  return (
    <div>
      <AllHeros title="Contact" />
      <Container>
        <h3>Contact Information</h3>
        <AddressHold>
          <p>
            <span style={{ fontFamily: "800" }}> Address</span>: Suit 211,
            floor2, Fedan Plaza opp Total Filling station
            <br /> Ojo Alaba International Market road, Lagos
          </p>
          <p>
            <span style={{ fontFamily: "800" }}>Phone</span>:+2347038244564
          </p>
          <p>
            <span style={{ fontFamily: "800" }}>Email</span>:
            chy4real1982@gmail.com
          </p>
        </AddressHold>
      </Container>
    </div>
  );
};

export default Contact;

const Container = styled.div`
  width: 100%;
  align-items: center;
  margin-top: 70px;
  margin-bottom: 80px;
  h3 {
    margin: 0;
    margin-left: 15px;
    font-size: 30px;
    font-family: Inria serif;
  }
`;

const AddressHold = styled.div`
  display: flex;

  p {
    margin-right: 30px;
    font-size: 18px;
    margin-left: 15px;
  }
`;
