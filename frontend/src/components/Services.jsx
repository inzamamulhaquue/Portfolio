import {useState, useEffect} from "react";
import "../styles/serviceStyle.css";

// FontAwesome icons
import { 
  FaJs, FaReact, FaNodeJs, FaAws, FaDocker, 
  FaCss3, FaGithub, FaHtml5 
} from "react-icons/fa";

// SimpleIcons pack
import { 
  SiMongodb, SiExpress, SiPostman, SiTailwindcss, 
  SiNextdotjs, SiJenkins, SiRender ,
} from "react-icons/si";


export default function Services() {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/services")
            .then((res) => res.json())
            .then((data) => { console.log("Services fetched:", data);
            setServices(data) })
            .catch((err) => console.error("Fetch error:", err));
    }, []);

    // Map icons string -> actual icon component
  const iconMap = {
  javascript: <FaJs className="icon js" />,
  react: <FaReact className="icon react" />,
  nodejs: <FaNodeJs className="icon node" />,
  aws: <FaAws className="icon aws" />,
  docker: <FaDocker className="icon docker" />,
  mongodb: <SiMongodb className="icon mongo" />,
  express: <SiExpress className="icon express" />,
  html5: <FaHtml5 className="icon html" />,
  css3: <FaCss3 className="icon css" />,
  github: <FaGithub className="icon git" />,
  postman: <SiPostman className="icon postman" />,
  tailwind: <SiTailwindcss className="icon tailwind" />,
  nextjs: <SiNextdotjs className="icon nextjs" />,
  jenkins: <SiJenkins className="icon jenkins" />,
  render: <SiRender className="icon render" />,
  };

    return (
        <section id="service" className="services">
            <h1 className="section-title">Services</h1>
            <div className="services-grid">
                 {services.map((srv, i) => (
          <div key={i} className="service-card">
            <h2>{srv.title}</h2>
            <div className="service-icons">
              {srv.icons.map((ic, idx) => (
                <span key={idx}>{iconMap[ic]}</span>
              ))}
            </div>
            <p>{srv.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}