import "./App.css";
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skill from "./components/Skill";

function App() {
  return (
    <>
      <Navbar />
      <Hero/>
      <Skill/>
      <About />
    </>
  );
}

export default App;
