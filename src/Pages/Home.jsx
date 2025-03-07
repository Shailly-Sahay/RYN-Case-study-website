import React from "react";
import {
  Blog,
  Experience,
  Expertise,
  FAQ,
  Hero,
  Marquee,
  Testimonials,
  Work,
} from "../ui";

const Home = () => {
  return (
    <>
      <Hero />
      <Expertise />
      <Work />
      <Experience />
      <Blog />
      <Testimonials />
      <FAQ />
      <Marquee />
    </>
  );
};

export default Home;
