import { forwardRef, useRef } from "react";
import { FiLinkedin, FiDribbble, FiGlobe } from "react-icons/fi";

import { useHeroAnimations } from "./hero.hooks";
import Navbar from "../../components/Navbar/Navbar";



const Hero = forwardRef(function Hero({ onNavClick }, heroRef) {
  const contentRef = useRef(null);
  const navRef = useRef(null);
  const socialsRef = useRef(null);
  const introRef = useRef(null);
  const titleRef = useRef(null);
  const ctaRef = useRef(null);
  const scrollRef = useRef(null);

  useHeroAnimations({
    bg: heroRef,
    content: contentRef,
    nav: navRef,
    socials: socialsRef,
    intro: introRef,
    title: titleRef,
    cta: ctaRef,
    scroll: scrollRef,
  });

  return (
    <section ref={heroRef} className="hero">

      <div className="herolines"></div>

        <Navbar ref={navRef} onNavClick={onNavClick} />

        <div ref={socialsRef} className="hero-socials">
          <span><FiLinkedin size={20} /></span>
          <span><FiDribbble size={20} /></span>
          <span><FiGlobe size={20} /></span>
        </div>

        <div ref={contentRef} className="hero-content">

          <span ref={introRef} className="intro">
            Hi, I’m Tarique — UI / Frontend Engineer
          </span>

          <h1 ref={titleRef} className="title">
            From Design to Production I build
          </h1>

          <div className="typing-wrapper">
            <h2 className="gradient typing">
              {"AI-Integrated Frontend Systems".split("").map((char, i) => (
                <span key={i} className="char line1">
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </h2>

            <h2 className="gradient typing">
              {"Senior Frontend Engineer".split("").map((char, i) => (
                <span key={i} className="char line2">
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </h2>
          </div>

          <div ref={ctaRef} className="cta">
            <button className="downloadResume">Download Resume</button>
            <button
              ref={scrollRef}
              className="scroll-down"
              onClick={() => {
                window.scrollTo({
                  top: window.innerHeight,
                  behavior: "smooth",
                });
              }}
            >
              Scroll Down ↓
            </button>
          </div>

        </div>

    </section>
  );
});

export default Hero;
