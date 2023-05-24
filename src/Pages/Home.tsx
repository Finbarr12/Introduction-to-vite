import React, { Suspense } from "react";
import Hero from "../Components/Hero";
import Render from "../Components/Render";
import AllProducts from "../Components/AllProducts";
import OurProject from "../Components/OurProject";
import Intresting from "../Components/Interesting";
import MainProducts from "../Components/MainProducts";
import Perfect from "../Components/Perfect";
import { Fade } from "react-awesome-reveal";

const Home = () => {
  return (
    <div>
      <Hero />
      <Fade cascade damping={0.1} triggerOnce>
        <Render />
        <AllProducts />
        <OurProject />
        <Intresting />
        <MainProducts />
        <Perfect />
      </Fade>
    </div>
  );
};

export default Home;
