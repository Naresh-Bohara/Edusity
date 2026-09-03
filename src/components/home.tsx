import React from "react";
import HeroSection from "./section/hero-section";
import ProgramSection from "./section/program-section";
import AboutSection from "./section/about-section";
import CampusSection from "./section/campus-section";
import TestimonialsSection from "./section/testimonials-section";
import ContactSection from "./section/contact-section";

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
      <section id="campus">
        <CampusSection />
      </section>
      <section id="testimonials">
        <TestimonialsSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
    </>
  );
};

export default Home;