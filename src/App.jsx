import { useRef } from "react";

import Hero from "./sections/Hero/Hero";
import WhoIAm from "./sections/About/WhoIAm";

function App() {
  const heroRef = useRef(null);
  const whoIAmRef = useRef(null);

  const scrollTo = (section) => {
    if (section === "hero") {
      heroRef.current?.scrollIntoView({ behavior: "smooth" });
    }

    if (section === "whoiam") {
      whoIAmRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Hero ref={heroRef} onNavClick={scrollTo} />
      <WhoIAm ref={whoIAmRef} />
    </>
  );
}

export default App;
