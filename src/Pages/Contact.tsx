import styled from "styled-components";
import AllHeros from "../Static/AllHeros";
import bgpic from "../assets/work.jpg";
import { BsEnvelopeCheck } from "react-icons/bs";
import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";
import { Fade } from "react-awesome-reveal";
import pics from "../assets/work.jpg";
import Loading from "../Static/Loading";
const Contact = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [messages, setmessages] = useState("");
  const [loading, setLoading] = useState(false);

  const SendMail = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    await axios
      .post("https://realfurniture.onrender.com/api/mailer", {
        email,
        subject,
        messages,
      })
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "Sent sucessfully",
          timerProgressBar: true,
          timer: 3000,
        });
        return res.data;
      })
      .catch((res) => {
        Swal.fire({
          title: "An error occured",
          text: "Try again",
          timer: 2000,
          timerProgressBar: true,
        });
        return res.data;
      });
    setLoading(false);
  };

  return (
    <Fade cascade damping={0.1} triggerOnce>
      <div>
        <AllHeros title="Contact" bi={`url(${pics})`} />
        <Container>
          <h3>Contact Information</h3>
          <AddressHold>
            <p>
              <span style={{ fontWeight: "800" }}> Address</span>: Suit 211,
              floor2, Fedan Plaza opp Total Filling station
              <br /> Ojo Alaba International Market road, Lagos
            </p>
            <p>
              <span style={{ fontWeight: "800" }}>Phone</span>:+2347038244564
            </p>
            <p>
              <span style={{ fontWeight: "800" }}>Email</span>:
              chy4real1982@gmail.com
            </p>
          </AddressHold>
          <BoxHold>
            <HoldMssg onSubmit={SendMail}>
              <Circle>
                <BsEnvelopeCheck />
              </Circle>
              <h3 style={{ marginTop: "32px" }}>Send Us a Message</h3>
              <InputHold>
                <input
                  type="text"
                  placeholder="Input email"
                  required
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <input
                  type="text"
                  placeholder="Input subject or title"
                  required
                  onChange={(e) => {
                    setSubject(e.target.value);
                  }}
                />
              </InputHold>
              <textarea
                style={{ width: "88%", height: "100px" }}
                placeholder="Message..."
                required
                onChange={(e) => {
                  setmessages(e.target.value);
                }}
              ></textarea>
              {!email || !subject || !messages ? (
                <Button bg="silver" disabled style={{ cursor: "not-allowed" }}>
                  Send Message
                </Button>
              ) : loading ? (
                <Button bg="#435555">
                  <Loading />
                </Button>
              ) : (
                <Button type="submit" bg="#0F3738">
                  Send Message
                </Button>
              )}
            </HoldMssg>
          </BoxHold>
        </Container>
      </div>
    </Fade>
  );
};

export default Contact;

const Button = styled.button<{ bg: string }>`
  width: 90%;
  height: 40px;
  border-radius: 5px;
  border: none;
  color: white;
  background-color: ${({ bg }) => bg};
  font-size: 16px;
  margin-top: 20px;
  cursor: pointer;
`;

const InputHold = styled.div`
  width: 90%;
  height: 35px;
  /* background-color: red; */
  margin-top: 27px;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 900px) {
    display: block;
  }

  input {
    width: 45%;
    height: 100%;
    outline: none;
    border: none;
    border: 1px solid silver;
    padding-left: 12px;

    @media screen and (max-width: 900px) {
      width: 95%;
      margin-bottom: 15px;
    }
  }
`;

const Circle = styled.div`
  width: 45px;
  height: 45px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 8%;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.5);
`;

const HoldMssg = styled.form`
  width: 84%;
  height: 73%;
  background-color: white;
  z-index: 3;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 900px) {
    width: 95%;
    height: 80%;
  }

  textarea {
    resize: none;
    margin-top: 30px;
    outline: none;
    padding-left: 12px;
    border: 1px solid silver;

    @media screen and (max-width: 900px) {
      margin-top: 80px;
    }
  }
`;

const BoxHold = styled.div`
  width: 800px;
  height: 500px;
  background-image: url(${bgpic});
  margin-top: 40px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 900px) {
    width: 100%;
  }

  ::before {
    content: "";
    background-color: rgba(0, 0, 0, 0.7);
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Container = styled.div`
  width: 100%;
  align-items: center;
  margin-top: 70px;
  margin-bottom: 80px;
  display: flex;
  justify-content: center;
  flex-direction: column;
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

  @media screen and (max-width: 900px) {
    display: block;
  }
`;
