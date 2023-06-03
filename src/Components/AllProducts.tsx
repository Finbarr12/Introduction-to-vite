import React from "react";
import styled from "styled-components";
import pix from "../Assets/chiairbg.png";
import pics from "../assets/table2.jpg";
import { useAppSelector } from "../Global/Store";
const AllProducts = () => {
  // const Product = useAppSelector((State) => State.allProducts);
  return (
    <Container>
      <h2>
        <i>Top Products</i>
      </h2>
      <Holders>
        {/* <Products>
          {Product?.map((props: any) => (
            <Holder key={props?._id}>
              <Boximg>
                <img src={props?.Image} alt="" />
              </Boximg>
              <h4>{props.name}</h4>
              <button>Delete</button>
            </Holder>
          ))}
        </Products> */}
      </Holders>
    </Container>
  );
};

export default AllProducts;
const Holders = styled.div`
  width: 99%;
  /* background-color: gold; */
`;

const Boximg = styled.div`
  width: 300px;
  height: 200px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const Holder = styled.div`
  margin-left: 30px;

  h4 {
    margin: 0;
    margin-top: 6px;
    font-size: 18px;
    text-transform: capitalize;
  }
  button {
    width: 80px;
    height: 30px;
    color: white;
    border: 0;
    background-color: red;
    border-radius: 5px;
    margin-top: 7px;
    margin-bottom: 20px;
    cursor: pointer;
  }
`;

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
{
  /* const Holder = styled.div`
  width: 90%;
`; */
}

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
  justify-content: center;
  flex-wrap: wrap;
  /* height: 680px; */
  /* background-color: red; */
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
