import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface AnimatedElement extends HTMLElement {
  anim?: gsap.core.Animation;
  hasScrollAnimation?: boolean;
}

gsap.registerPlugin(ScrollTrigger);

export default function setSplitText() {
  ScrollTrigger.config({ ignoreMobileResize: true });
  if (window.innerWidth < 900) return;
  const paras: NodeListOf<AnimatedElement> = document.querySelectorAll(".para");
  const titles: NodeListOf<AnimatedElement> = document.querySelectorAll(".title");

  const TriggerStart = window.innerWidth <= 1024 ? "top 60%" : "20% 60%";
  paras.forEach((para) => {
    para.classList.add("visible");
    if (para.hasScrollAnimation) return;
    para.hasScrollAnimation = true;
    para.anim = gsap.fromTo(
      para,
      { autoAlpha: 0, y: 40 },
      {
        autoAlpha: 1,
        scrollTrigger: {
          trigger: para.parentElement?.parentElement,
          toggleActions: "play pause resume reverse",
          start: TriggerStart,
        },
        duration: 1,
        ease: "power3.out",
        y: 0,
      }
    );
  });
  titles.forEach((title) => {
    if (title.hasScrollAnimation) return;
    title.hasScrollAnimation = true;
    title.anim = gsap.fromTo(
      title,
      { autoAlpha: 0, y: 40, rotate: 5 },
      {
        autoAlpha: 1,
        scrollTrigger: {
          trigger: title.parentElement?.parentElement,
          toggleActions: "play pause resume reverse",
          start: TriggerStart,
        },
        duration: 0.8,
        ease: "power2.inOut",
        y: 0,
        rotate: 0,
      }
    );
  });
}
