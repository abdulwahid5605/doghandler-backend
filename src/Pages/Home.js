import React, { Fragment } from "react";
import Hero from "../Components/Home/Hero";
import Card from "../Components/Home/Card";
import Location from "../Components/Home/Location";
import SecurityServices from "../Components/Home/SecurityServices";

const Home = () => {
  return (
    <Fragment>
      <Hero />
      <Card />
      <Location />
      <SecurityServices />
    </Fragment>
  );
};

export default Home;
