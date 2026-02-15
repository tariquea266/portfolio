import { forwardRef, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectCard from "./ProjectCard";
import { projects } from "./ProjectsData";

gsap.registerPlugin(ScrollTrigger);

const Projects = forwardRef(function Projects(_, ref) {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const cards = cardsRef.current;
    
    cards.forEach((card, index) => {
      const isLast = index === cards.length - 1;
      
      gsap.to(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 20%",
          end: isLast ? "bottom top" : "top 10%",
          scrub: 1,
        },
        ease: "none",
        scale: isLast ? 1 : 0.9,
        opacity: isLast ? 1 : 0,
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <section ref={ref} className="projects">
      <div className="projects-header">
        <span className="headingTag">Latest Project</span>
        <h2>Work That Solves, Simplifies, and Scales Across Products & Industries</h2>
      </div>

      <div ref={sectionRef} className="projects-container">
        {projects.map((item, i) => (
          <ProjectCard
            key={i}
            item={item}
            index={i}
            cardRef={(el) => (cardsRef.current[i] = el)}
          />
        ))}
      </div>
    </section>
  );
});

export default Projects;