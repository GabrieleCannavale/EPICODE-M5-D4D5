import React from "react";
import LatestRelease from "../components/latestRelease/LatestRelease";
import MyNavigationBar from "../components/myNavigationBar/MyNavigationBar";
import MyCarousel from "../components/myCarousel/MyCarousel";

const Homepage = () => {
  return (
    <>
      <MyNavigationBar />
      <MyCarousel />
      <LatestRelease />
    </>
  );
};


export default Homepage;