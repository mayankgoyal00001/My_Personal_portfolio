import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Education <span>&</span>
          <br /> leadership
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech, Computer Science</h4>
                <h5>National Institute of Engineering, Mysore · CGPA 8.74</h5>
              </div>
              <h3>2023–27</h3>
            </div>
            <p>
              Building a strong foundation in computer science, software
              engineering, databases, and machine learning.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Tech Core Member</h4>
                <h5>The BYTE Club, NIE Mysore</h5>
              </div>
              <h3>2024–26</h3>
            </div>
            <p>
              Organized three technical events for 250+ students, supporting
              hands-on learning and collaboration.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Class XII · CBSE</h4>
                <h5>NCA Senior Secondary School · 89.8%</h5>
              </div>
              <h3>2021–22</h3>
            </div>
            <p>
              Participated in 7–8 hackathons, including Smart India Hackathon
              and DevJams.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
