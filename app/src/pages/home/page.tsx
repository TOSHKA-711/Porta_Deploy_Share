import React from "react";
import Hero from "./home components/hero";
import FeaturedProjects from "./home components/featuredProjects";
import Skills from "./home components/skills";
import GetInTouch from "./home components/getInTouch";

const HomePage = () => {
  return (
    <div className="home-page flex flex-col gap-20 mb-10 animate-fadeIn">
      <Hero />
      <FeaturedProjects />
      <Skills/>
      <GetInTouch />
    </div>
  );
};

export default HomePage;
