import { forwardRef, useEffect, useRef } from "react";

const Navbar = forwardRef(function Navbar({ onNavClick }, ref) {
  const internalRef = useRef(null);
  const navRef = ref || internalRef;

  useEffect(() => {
    const handleScroll = () => {
      if (!navRef.current) return;

      if (window.scrollY > 200) {
        navRef.current.classList.add("is-scrolled");
      } else {
        navRef.current.classList.remove("is-scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav ref={navRef} className="hero-nav">
      <button onClick={() => onNavClick("hero")}>Home</button>
      <button onClick={() => onNavClick("whoiam")}>Who am I?</button>
      <button onClick={() => onNavClick("projects")}>Latest Projects</button>
      <button onClick={() => onNavClick("howiwork")}>How I work</button>
      <button onClick={() => onNavClick("contact")}>Contact</button>
    </nav>
  );
});

export default Navbar;