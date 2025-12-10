import React from "react";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Skill from "./Skill";
import AboutSection from "./AboutSection";
import CertificationSection from "./CertificationSection";
import ProjectSection from "./ProjectSection";
import Contact from "./Contact ";
import Footer from "./Footer";

function MainComponent() {
  return (
    <>
      <Navbar />

      <section id="home">
        <Hero />
      </section>
      <section >
        <Skill />
      </section>

      <section id="about">
        <AboutSection />
      </section>

      <section id="certifications">
        <CertificationSection />
      </section>
        <section id="projects">
        <ProjectSection />
      </section>
        <section id="contact">
        <Contact />
      </section>
       <section id="footer">
        <Footer />
      </section>
    </>
  );
}

export default MainComponent;
