import gsap from "gsap";

export function entryAnimation({
  bg,
  nav,
  socials,
  intro,
  title,
  cta,
  scroll,
}) {
  const ctx = gsap.context(() => {
    const tl = gsap.timeline({ delay: 0.2 });

    tl.from(nav.current, {
      y: -40,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
    })
      .from(
        socials.current.children,
        {
          opacity: 0,
          y: 10,
          scale: 0.9,
          stagger: 0.12,
          duration: 0.4,
          ease: "power2.out",
        },
        "-=0.3"
      )
      .from(intro.current, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power2.out",
      })
      .from(title.current, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power2.out",
      })
      .from(
        cta.current,
        {
          opacity: 0,
          y: 16,
          duration: 0.6,
          ease: "power2.out",
        },
        "+=0.4"
      );

    // gsap.to(bg.current, {
    //   backgroundPosition: "120% 120%",
    //   duration: 5,
    //   repeat: -1,
    //   yoyo: true,
    //   ease: "sine.inOut",
    // });

    gsap.to(scroll.current, {
      y: 15,
      // opacity: 0.5,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, bg);

  return () => ctx.revert();
}

export function typingAnimation() {
  const line1 = gsap.utils.toArray(".line1");
  const line2 = gsap.utils.toArray(".line2");

  gsap.set([line1, line2], { opacity: 0 });

  gsap.timeline({ repeat: -1, delay: 1 })
    .to(line1, { opacity: 1, stagger: 0.1 })
    .to({}, { duration: 1.5 })
    .to(line1, { opacity: 0, stagger: 0.06 })
    .to(line2, { opacity: 1, stagger: 0.1 })
    .to({}, { duration: 1.5 })
    .to(line2, { opacity: 0, stagger: 0.06 });
}

export function parallaxAnimation({ content }) {
  const move = (e) => {
    gsap.to(content.current, {
      x: (e.clientX / window.innerWidth - 0.5) * 14,
      y: (e.clientY / window.innerHeight - 0.5) * 14,
      duration: 0.6,
      ease: "power3.out",
    });
  };

  window.addEventListener("mousemove", move);
  return () => window.removeEventListener("mousemove", move);
}
