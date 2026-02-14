import { forwardRef, memo, useEffect, useRef } from "react";

const Navbar = memo(
  forwardRef(function Navbar({ onNavClick }, ref) {
    const navRef = ref ?? useRef(null);

    useEffect(() => {
      const handleScroll = () => {
        if (!navRef.current) return;

        if (window.scrollY > 200) {
          navRef.current.classList.add("is-scrolled");
        } else {
          navRef.current.classList.remove("is-scrolled");
        }
      };

      window.addEventListener("scroll", handleScroll, { passive: true });
      handleScroll(); // initial check

      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
      <nav ref={navRef} className="hero-nav">
        <button onClick={() => onNavClick("hero")}>Home</button>
        <button onClick={() => onNavClick("whoiam")}>Who am I?</button>
      </nav>
    );
  })
);

export default Navbar;
