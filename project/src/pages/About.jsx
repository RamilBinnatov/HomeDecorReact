import React, { useEffect } from "react";
import AboutSection from "../components/About";
import AboutStats from "../components/AboutStats";
import Breadcrumbs from "../components/BreadCrumbs";
import changeTitle from "../helpers/change";

function About() {
  useEffect(() => {
    changeTitle("About");
  }, []);

  return (
    <>
      <div className="main">
        <Breadcrumbs />
        <AboutSection />
        <AboutStats />
      </div>
    </>
  );
}

export default About;
