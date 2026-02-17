import { useRef } from "react";
import Hero from "./sections/Hero/Hero";
import Whoiam from "./sections/About/Whoiam";
import Tools from "./sections/Tools/Tools";
import Projects from "./sections/Projects/Projects";
import Aibanner from "./sections/Aibanner/Aibanner";
import Howiwork from "./sections/Howiwork/Howiwork";
import Contact from "./sections/Contact/Contact";

function App() {
  const heroRef = useRef(null);
  const whoiamRef = useRef(null);
  const projectsRef = useRef(null);
  const howiworkRef = useRef(null);
  const contactRef = useRef(null);

  const sections = { hero: heroRef, whoiam: whoiamRef, projects: projectsRef, howiwork: howiworkRef, contact: contactRef };

  const handleNavClick = (section) => {
    sections[section].current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Hero ref={heroRef} onNavClick={handleNavClick} />
      <Whoiam ref={whoiamRef} />
      <Tools/>
      <Projects ref={projectsRef} />
      <Aibanner/>
      <Howiwork ref={howiworkRef} />
      <Contact ref={contactRef} />
    </>
  );
}

export default App;