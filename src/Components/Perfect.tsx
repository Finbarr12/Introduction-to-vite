import React from "react";
import styled from "styled-components";
import homes from "../Assets/homes.jpg";
const Perfect = () => {
  return (
    <Container>
      <Image>
        <img src={homes} alt="" />
      </Image>
      <Second>
        <h4>PERFECT</h4>
        <Held>
          <h1>
            <i>We Make Perfection</i>
          </h1>
        </Held>
        <p>
          On her way she met a copy. The copy warned the Little Blind Text, that
          where it came from it would have been rewritten a thousand times and
          everything that was left from its origin would be the word "and" and
          the Little Blind Text should turn around and return to its own, safe
          country. But nothing the copy said could convince her and so it didn’t
          take long until a few insidious Copy Writers ambushed her, made her
          drunk with Longe and Parole and dragged her into their agency, where
          they abused her for their.
        </p>
        <p>
          When she reached the first hills of the Italic Mountains, she had a
          last view back on the skyline of her hometown Bookmarksgrove, the
          headline of Alphabet Village and the subline of her own road, the Line
          Lane. Pityful a rethoric question ran over her cheek, then she
          continued her way.
        </p>
        <button>Shop with us</button>
      </Second>
    </Container>
  );
};

export default Perfect;

const Held = styled.div`
  border-bottom: 1px solid #126668;
`;

const Second = styled.div`
  margin-left: 40px;

  width: 700px;
  /* background-color: red; */

  p {
    margin-right: 70px;
    color: darkgray;
  }
  h4 {
    margin: 0;
    color: #c5c5c5;
    margin-bottom: 5px;
    margin-left: 70px;
  }

  h1 {
    margin: 0;
    font-size: 30px;
    margin-left: 70px;
    margin-bottom: 15px;
  }

  button {
    margin-right: 70px;
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
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  /* justify-content: space-between; */
  margin-top: 100px;
`;

const Image = styled.div`
  width: 600px;
  height: 450px;
  margin-right: 40px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
