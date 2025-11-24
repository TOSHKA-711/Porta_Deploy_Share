import React from "react";
import Hero from "./home components/hero";
// import FeaturedProjects from "./home components/experience";
import Experience from "./home components/experience";

import Skills from "./home components/skills";
import FeaturedProjects from "./home components/FeaturedProjects";
import GetInTouch from "./home components/getInTouch";

const HomePage = () => {
  return (
    <div className="home-page bg-[#11071F] flex flex-col gap-20 pb-20 pt-20 animate-fadeIn">
      <Hero />
      <Experience />
      <Skills/>
      <FeaturedProjects />
      <GetInTouch/>
    </div>
  );
};

export default HomePage;
