import React from "react";
import HeroSection from "./section/hero-section";
import ProgramSection from "./section/program-section";
import AboutSection from "./section/about-section";

const Home = () => {
  return (
    <>
      <section id="home">
        <HeroSection />
      </section>
      <section id="program">
        <ProgramSection />
      </section>
      <section id="about">
        <AboutSection />
      </section>
    </>
  );
};

export default Home;