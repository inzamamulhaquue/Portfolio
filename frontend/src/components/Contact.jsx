import { useEffect, useState } from "react";
import "../styles/contactStyles.css";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

const iconMap = {
  github: <FaGithub />,
  linkedin: <FaLinkedin />,
  email: <FaEnvelope />,
  phone: <FaPhone />
};

export default function Contact() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    // fetch("http://localhost:5000/api/contact")
    fetch("https://portfolio-backend-wjnf.onrender.com/api/contact")
      .then((res) => res.json())
      .then((data) => setContacts(data))
      .catch((err) => console.error("Error fetching contacts:", err));
  }, []);

  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Get In Touch</h2>
      <div className="contact-grid">
        {contacts.map((c, i) => (
          <div key={i} className="contact-card">
            <div className="contact-icon">{iconMap[c.icon]}</div>
            <a href={c.link} target="_blank" rel="noreferrer">{c.platform}</a>
          </div>
        ))}
      </div>
    </section>
  );
}
