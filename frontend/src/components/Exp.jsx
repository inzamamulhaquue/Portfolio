import { useEffect, useState } from "react";
import "../styles/expStyles.css";

export default function Experience() {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/exp")
      .then((res) => res.json())
      .then((data) => setExperiences(data))
      .catch((err) => console.error("Error fetching experiences:", err));
  }, []);

  return (
    <section id="experience" className="experience-section">
      <h2 className="experience-title">Experience</h2>

      <div className="experience-timeline">
        {experiences.map((exp, i) => (
          <div key={i} className="experience-card">
            <h3>{exp.role}</h3>
            <h4>@ {exp.company}</h4>
            <span className="duration">{exp.duration}</span>
            <ul>
              {exp.description.map((point, idx) => (
                <li key={idx}>- {point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
