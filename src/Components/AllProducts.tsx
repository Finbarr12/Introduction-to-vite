import React from "react";
import styled from "styled-components";
import pix from "../Assets/chiairbg.png";
const AllProducts = () => {
  return (
    <Container>
      <h2>
        <i>Top Products</i>
      </h2>

      <Holder>
        <Products>
          <ProductCard>
            <Held>
              <h4>Furnitures</h4>
              <p>Shop Now</p>
            </Held>
            <Image>
              <img src={pix} alt="" />
            </Image>
          </ProductCard>
          <ProductCard>
            <Held>
              <h4>Furnitures</h4>
              <p>Shop Now</p>
            </Held>
            <Image>
              <img src={pix} alt="" />
            </Image>
          </ProductCard>
          <ProductCard>
            <Held>
              <h4>Furnitures</h4>
              <p>Shop Now</p>
            </Held>
            <Image>
              <img src={pix} alt="" />
            </Image>
          </ProductCard>
          <ProductCard>
            <Held>
              <h4>Furnitures</h4>
              <p>Shop Now</p>
            </Held>
            <Image>
              <img src={pix} alt="" />
            </Image>
          </ProductCard>
          <ProductCard>
            <Held>
              <h4>Furnitures</h4>
              <p>Shop Now</p>
            </Held>
            <Image>
              <img src={pix} alt="" />
            </Image>
          </ProductCard>
          <ProductCard>
            <Held>
              <h4>Furnitures</h4>
              <p>Shop Now</p>
            </Held>
            <Image>
              <img src={pix} alt="" />
            </Image>
          </ProductCard>
          <ProductCard>
            {" "}
            <Held>
              <h4>Furnitures</h4>
              <p>Shop Now</p>
            </Held>
            <Image>
              <img src={pix} alt="" />
            </Image>
          </ProductCard>
          <ProductCard>
            <Held>
              <h4>Furnitures</h4>
              <p>Shop Now</p>
            </Held>
            <Image>
              <img src={pix} alt="" />
            </Image>
          </ProductCard>
          <ProductCard>
            {" "}
            <Held>
              <h4>Furnitures</h4>
              <p>Shop Now</p>
            </Held>
            <Image>
              <img src={pix} alt="" />
            </Image>
          </ProductCard>
        </Products>
      </Holder>
    </Container>
  );
};

export default AllProducts;

const Held = styled.div`
  p {
    font-size: 19px;
    border-bottom: 2px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 97px;
    visibility: hidden;
  }
`;

const Image = styled.div`
  width: 50%;
  height: 100%;
  /* background-color: red; */
  margin-left: 15px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
const Text = styled.div``;
const Holder = styled.div`
  width: 90%;
`;

const ProductCard = styled.div`
  width: 32.5%;
  height: 210px;
  background-color: #d3d2d2;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  /* margin: 20px; */

  :hover {
    p {
      visibility: visible;
    }
    transform: scale(1.01);
    transition: all 350ms;
  }

  h4 {
    margin: 0;
    text-transform: uppercase;
    font-size: 20px;
    margin-top: 90px;
  }
`;

const Products = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  height: 680px;

  margin-top: 30px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  h2 {
    margin-top: 20px;
    font-size: 35px;
  }
`;
