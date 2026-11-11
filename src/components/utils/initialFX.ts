import gsap from "gsap";

export function initialFX() {
  document.body.style.overflowY = "auto";
  document.getElementsByTagName("main")[0].classList.add("main-active");
  gsap.to("body", {
    backgroundColor: "#0b080c",
    duration: 0.5,
    delay: 1,
  });

  gsap.fromTo(
    [".landing-info h3", ".landing-intro h2", ".landing-intro h1"],
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.inOut",
      y: 0,
      stagger: 0.025,
      delay: 0.3,
    }
  );

  gsap.fromTo(
    ".landing-h2-info",
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.inOut",
      y: 0,
      stagger: 0.025,
      delay: 0.3,
    }
  );

  gsap.fromTo(
    ".landing-info-h2",
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      y: 0,
      delay: 0.8,
    }
  );
  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      delay: 0.1,
    }
  );

  LoopText(".landing-h2-info", ".landing-h2-info-1");
  LoopText(".landing-h2-1", ".landing-h2-2");
}

function LoopText(first: string, second: string) {
  gsap.set(first, { autoAlpha: 1, y: 0 });
  gsap.set(second, { autoAlpha: 0, y: 50 });
  gsap
    .timeline({ repeat: -1, repeatDelay: 1 })
    .to(first, { autoAlpha: 0, y: -50, duration: 0.5 }, 4)
    .set(first, { y: 50 })
    .to(second, { autoAlpha: 1, y: 0, duration: 0.6 }, 4.5)
    .to(second, { autoAlpha: 0, y: -50, duration: 0.5 }, 9)
    .set(second, { y: 50 })
    .to(first, { autoAlpha: 1, y: 0, duration: 0.6 }, 9.5);
}
