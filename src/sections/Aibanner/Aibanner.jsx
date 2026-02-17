import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Aibanner() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const chars = gsap.utils.toArray(".char");

      gsap.fromTo(
        chars,
        {
          x: () => gsap.utils.random(-200, 200),
          y: () => gsap.utils.random(-200, 200),
          rotate: () => gsap.utils.random(-90, 90),
          opacity: 0,
        },
        {
          x: 0,
          y: 0,
          rotate: 0,
          opacity: 1,
          ease: "none",
          stagger: 0.02,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "center center",
            scrub: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert(); // 🔥 CLEANUP (MOST IMPORTANT)
  }, []);

  const text =
    "AI-Powered Frontend Experiences Built for Speed, Scale, and Usability.";

  return (
    <section className="aibanner" ref={sectionRef}>
      <div className="aibanner__max-width">
        <h2>
          {text.split("").map((char, i) => (
            <span className="char" key={i}>
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h2>
      </div>
    </section>
  );
}

export default Aibanner;
