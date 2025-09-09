import { useEffect, useState } from "react";
import "../styles/projectStyles.css";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // fetch("http://localhost:5000/api/project")
    fetch("https://portfolio-backend-wjnf.onrender.com/api/project")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Error fetching projects:", err));
  }, []);

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Recent Works</h2>
      <div className="projects-grid">
        {projects.map((proj, i) => (
          <div key={i} className="project-card">
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <div className="tech-stack">
              {proj.technologies && proj.technologies.split(",").map((tech, idx) => (
                <span key={idx} className="tech-item">{tech.trim()}</span>
              ))}
            </div>
            <a href={proj.link} target="_blank" rel="noreferrer" className="project-btn">
               {proj.title}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
