import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { publicAsset } from "../assets/publicAsset";

gsap.registerPlugin(useGSAP);

const Work = () => {
  const projects = [
    {
      name: "RecruitAI",
      image: publicAsset("images/recruitai.webp"),
      link: "https://github.com/mayankgoyal00001/AI-Interview-Recruiter",
      category: "AI recruitment SaaS",
      tools: "Next.js, React, Mistral AI, Neon PostgreSQL, Drizzle ORM",
      description: "Voice-based interviews with adaptive question generation and candidate evaluation.",
    },
    {
      name: "Multi-Agent Research Assistant",
      image: publicAsset("images/research-assistant.webp"),
      link: "https://github.com/mayankgoyal00001/Multi_reasearch_agent",
      category: "LLM research workflow",
      tools: "Python, LangChain, Gemini API, Tavily",
      description: "A research pipeline that searches, reads, writes, and reviews sourced Markdown reports.",
    },
    {
      name: "Cricket Score Prediction",
      image: publicAsset("images/cricket-predictor.webp"),
      link: "https://github.com/mayankgoyal00001/cricket-score-prediction",
      category: "Machine learning · R² 0.79",
      tools: "Python, Pandas, Scikit-learn, Streamlit",
      description: "IPL score predictions using match conditions and engineered pressure features.",
    },
  ];
  useGSAP(() => {
  let translateX: number = 0;

  function setTranslateX() {
    const box = document.getElementsByClassName("work-box");
    const rectLeft = document
      .querySelector(".work-container")!
      .getBoundingClientRect().left;
    const rect = box[0].getBoundingClientRect();
    const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
    let padding: number =
      parseInt(window.getComputedStyle(box[0]).padding) / 2;
    translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
  }

  setTranslateX();

  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".work-section",
      start: "top top",
      end: `+=${translateX}`, // Use actual scroll width
      scrub: true,
      pin: true,
      id: "work",
    },
  });

  timeline.to(".work-flex", {
    x: -translateX,
    ease: "none",
  });

  // Clean up (optional, good practice)
  return () => {
    timeline.kill();
    ScrollTrigger.getById("work")?.kill();
  };
}, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
                <p>{project.description}</p>
              </div>
              <WorkImage image={project.image} alt={`${project.name} dashboard preview`} link={project.link} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
