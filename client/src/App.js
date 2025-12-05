import "./App.css";
import AboutSection from "./components/AboutSection";
import CertificationSection from "./components/CertificationSection";
import Contact from "./components/Contact ";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProjectSection from "./components/ProjectSection";
import Skill from "./components/Skill";

function App() {
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

export default App;
