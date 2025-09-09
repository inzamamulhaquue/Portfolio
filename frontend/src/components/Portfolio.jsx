import { useState, useEffect } from "react";
import "../styles/portfolioStyles.css";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaFilePdf, FaLaptopCode, FaUser, FaBriefcase, FaTools, FaAddressBook, FaWhatsapp, FaCode, } from "react-icons/fa";

export default function Portfolio() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fetch("http://localhost:5000/api/hero")
    fetch("https://portfolio-backend-wjnf.onrender.com/api/hero")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error("Fetch error:", err))
      .finally(() => setLoading(false));
  }, []);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  if (loading) return <div className="loading">Loading...</div>;

  return (
    <section className="portfolio">
      {/* ===== Navigation ===== */}
      <div className="nav-box">
        <a href="#about" onClick={(e) => scrollToSection(e, "about")}><FaUser /> About</a>
        <a href="#service" onClick={(e) => scrollToSection(e, "service")}><FaCode /> Services</a>
        <a href="#skills" onClick={(e) => scrollToSection(e, "skills")}><FaTools /> Skills</a>
        <a href="#experience" onClick={(e) => scrollToSection(e, "experience")}><FaBriefcase /> Experience</a>
        <a href="#projects" onClick={(e) => scrollToSection(e, "projects")}><FaLaptopCode /> Projects</a>
        <a href="#contact" onClick={(e) => scrollToSection(e, "contact")}><FaAddressBook /> Contact</a>
      </div>

      {/* ===== Hero Section (About) ===== */}
      <div id="about" className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">

          <h1 className="hero-title no-wrap">
            Hii, I am <span>{data?.name || "Inzamamul Haque"}</span>
          </h1>
          <h2 className="hero-role">{data?.title || "SDE | MERN Stack Developer | CyberArk"}</h2>

          {/* Short Summary */}
          <p className="hero-summary">
            {data?.description ||
              "Full Stack Developer with experience in MERN, AWS, CyberArk and modern web technologies. Skilled in building scalable apps, REST APIs, and delivering high-quality user experiences."}
          </p>

          {/* Buttons */}
          <div className="hero-buttons">
            {data?.resume && (
              <a href={data.resume} target="_blank" rel="noreferrer" className="hero-btn cv-btn">
                <FaFilePdf /> Download CV
              </a>
            )}
            {data?.whatsapp && (
              <a
                href={`https://wa.me/${data.whatsapp.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-btn talk-btn"
              >
                <FaWhatsapp /> Let’s Talk
              </a>
            )}
          </div>

          {/* Follow Me */}
          <div className="follow-me">
            <p>Follow Me</p>
            <div className="follow-links">
              {data?.linkedin && (
                <a href={data.linkedin} target="_blank" rel="noopener noreferrer">
                  <FaLinkedin /> LinkedIn
                </a>
              )}
              {data?.github && (
                <a href={data.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub /> GitHub
                </a>
              )}
              {data?.email && (
                <a href={`mailto:${data.email}`} target="_blank" rel="noopener noreferrer">
                  <FaEnvelope /> Email
                </a>
              )}
              {data?.phone && (
                <a href={`tel:${data.phone.replace(/[^0-9]/g, "")}`}>
                  <FaPhone /> Call
                </a>
              )}
            </div>
          </div>
        </div>
        </div>




    </section>
  );
}
