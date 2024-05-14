import React from "react";
import AboutIconsFirst from "./AboutIconsFirst";
import AboutIconsSecond from "./AboutIconsSecond";

const About = () => {
  return (
    <div className=" relative min-h-screen lg:h-screen w-screen lg:w-full">
      <div className=" hidden xl:block absolute w-1/3 h-full top-0 right-0 bg-[#39D47A]  "></div>
      <div className=" grid grid-cols-1 lg:grid-cols-2 lg:gap-3 gap-4 md:bg-[#554C86] 2xl:container 2xl:px-52 lg:bg-transparent">
        <AboutIconsFirst />
        <AboutIconsSecond />
      </div>
    </div>
  );
};

export default About;
