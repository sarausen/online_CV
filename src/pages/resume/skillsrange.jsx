import './skills.css';

const Resume = () => {
  return (
    <div className="skills-container">
      <div className="skill-bar">
        <span className="skill-bar__label">HTML</span>
        <div className="skill-bar__bar">
          <div className="skill-bar__progress"></div>
        </div>
        <span className="skill-bar__percentage">70%</span>
      </div>
      <div className="skill-bar">
        <span className="skill-bar__label">CSS</span>
        <div className="skill-bar__bar">
          <div className="skill-bar__progress skill-bar__progress--css"></div>
        </div>
        <span className="skill-bar__percentage">70%</span>
      </div>
      <div className="skill-bar">
        <span className="skill-bar__label">React</span>
        <div className="skill-bar__bar">
          <div className="skill-bar__progress skill-bar__progress--react"></div>
        </div>
        <span className="skill-bar__percentage">70%</span>
      </div>
      <div className="skill-bar">
        <span className="skill-bar__label">Figma</span>
        <div className="skill-bar__bar">
          <div className="skill-bar__progress skill-bar__progress--figma"></div>
        </div>
        <span className="skill-bar__percentage">90%</span>
      </div>
    </div>
  );
};

export default Resume;
