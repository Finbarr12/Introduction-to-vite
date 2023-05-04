import React from "react";
import Hero from "../Components/Hero";
import Render from "../Components/Render";
import AllProducts from "../Components/AllProducts";
import OurProject from "../Components/OurProject";
import Intresting from "../Components/Interesting";
import MainProducts from "../Components/MainProducts";
import Perfect from "../Components/Perfect";

const Home = () => {
  return (
    <div>
      <Hero />
      <Render />
      <AllProducts />
      <OurProject />
      <Intresting />
      <MainProducts />
      <Perfect />
    </div>
  );
};

export default Home;
