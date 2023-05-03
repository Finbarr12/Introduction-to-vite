import React from "react";
import Hero from "../Components/Hero";
import Render from "../Components/Render";
import AllProducts from "../Components/AllProducts";
import OurProject from "../Components/OurProject";

const Home = () => {
  return (
    <div>
      <Hero />
      <Render />
      <AllProducts />
      <OurProject />
    </div>
  );
};

export default Home;
