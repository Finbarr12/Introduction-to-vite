import styled from "styled-components";
import { CiDeliveryTruck } from "react-icons/ci";
import { AiOutlineGift } from "react-icons/ai";
import { TbTruckReturn } from "react-icons/tb";
import { BsFillTelephoneInboundFill } from "react-icons/bs";
import { AiOutlineMobile } from "react-icons/ai";
import { Fade } from "react-awesome-reveal";
const Render = () => {
  return (
    <Container>
      <Fade triggerOnce delay={500}>
        <Box>
          <CiDeliveryTruck style={{ fontSize: "80px", color: "#977d59" }} />

          <p>Home Delivery</p>
        </Box>
        <Box>
          <AiOutlineGift style={{ fontSize: "80px", color: "#977d59" }} />
          <p>Special Packages</p>
        </Box>
        <Box>
          <TbTruckReturn style={{ fontSize: "80px", color: "#977d59" }} />
          <p>Early Returns</p>
        </Box>

        <Box>
          <AiOutlineMobile style={{ fontSize: "60px", color: "#977d59" }} />
          <p>Mobile friendly</p>
        </Box>

        <Box>
          <BsFillTelephoneInboundFill
            style={{ fontSize: "60px", color: "#977d59", marginBottom: "7px" }}
          />
          <p>24/7 support</p>
        </Box>
      </Fade>
    </Container>
  );
};

export default Render;

const Container = styled.div`
  width: 100%;
  height: 170px;
  background-color: #0f3738;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

const Box = styled.div`
  width: 250px;
  height: 100px;
  border-right: 1px solid #946c38;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media screen and (max-width: 425px) {
    font-size: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 50px;
  }

  p {
    color: white;
    font-size: 22px;
    margin: 0;
    font-family: Inria serif;
    /* margin-top: 15px; */
  }
`;
