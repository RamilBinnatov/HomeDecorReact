import React from "react";
import AboutSection from "../components/About";
import AboutStats from "../components/AboutsTats";

function About() {
  return (
    <>
      <div className="container">
        <div className="pageHead">
          <div className="tit">Home | About </div>
        </div>
        <AboutSection />
        <AboutStats />
      </div>
    </>
  );
}

export default About;
