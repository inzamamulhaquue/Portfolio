import { useEffect, useState } from "react";
import '../styles/skillStyles.css';
import { FaJs, FaReact, FaNodeJs,FaBootstrap , FaDatabase, FaPython, FaAws, FaDocker, FaGithub, FaHtml5, FaCss3, FaCogs, FaProjectDiagram, FaExchangeAlt, FaKey,  FaGit,  FaUsers, FaComments, FaBrain, FaClock} from "react-icons/fa";
import { SiMongodb, SiExpress, SiNextdotjs, SiRedux, SiSocketdotio, SiTypescript, SiMysql , SiTailwindcss, SiRender, SiCyberdefenders ,  SiJenkins, SiApachespark, SiPostman  } from "react-icons/si";
import { GiPuzzle } from "react-icons/gi";
 



export default function Skills() {
    const [skills , setSkills] = useState([]);


    useEffect(() => {
        // fetch("http://localhost:5000/api/skills")
     fetch("https://portfolio-backend-wjnf.onrender.com/api/skills")
        .then((res) => res.json())
        .then((data) => setSkills(data))
        .catch((eror) => console.error("Error fetching:", eror));
    }, []);


    const iconMap ={
    javascript: <FaJs className="icon js" />,
    typescript: <SiTypescript className="icon ts" />,
    cicd: <SiJenkins className="icon cicd" />,            // or SiGithubactions
  apigateway: <FaExchangeAlt className="icon api" />,   // generic API gateway symbol
  microservices: <FaProjectDiagram className="icon micro" />, 
  restapi: <FaCogs className="icon restapi" />,         // REST API dev
  oauth: <FaKey className="icon oauth" />,              // security key for OAuth
  aiapis: <SiApachespark className="icon ai" />, 
    mysql: <SiMysql className="icon mysql" />,
    react: <FaReact className="icon react" />,
  nextjs: <SiNextdotjs className="icon next" />,
  redux: <SiRedux className="icon redux" />,
  socketio: <SiSocketdotio className="icon socket" />,
  bootstrap: <FaBootstrap className="icon bootstrap" />,
  contextapi: <FaReact className="icon context" />,
    nodejs: <FaNodeJs className="icon node" />,
    python: <FaPython className="icon python" />,
    mongodb: <SiMongodb className="icon mongo" />,
    express: <SiExpress className="icon express" />,
    html5: <FaHtml5 className="icon html" />,
    css3: <FaCss3 className="icon css" />,
    tailwind: <SiTailwindcss className="icon tailwind" />,
    database: <FaDatabase className="icon db" />,
    aws: <FaAws className="icon aws" />,
    docker: <FaDocker className="icon docker" />,
    // jenkins: <SiJenkins className="icon jenkins" />,
    render: <SiRender className="icon render" />,
    cyberark: <SiCyberdefenders className="icon cyber" />,
    github: <FaGithub className="icon git" />,
     git: <FaGit className="icon git" />,
  postman: <SiPostman className="icon postman" />,
  etl: <FaDatabase className="icon etl" />,
  oop: <FaProjectDiagram className="icon oop" />,
   problemSolving: <GiPuzzle className="icon problem" />,
  teamCollaboration: <FaUsers className="icon team" />,    // Users = collaboration
//   communication: <FaComments className="icon communication" />, // Chat bubbles
  timeManagement: <FaClock className="icon time" />,       // Clock
//   adaptability: <MdWorkspaces className="icon adaptability" />, // Flexible workspace
  criticalThinking: <FaBrain className="icon brain" />,
  problemsolving: <GiPuzzle className="icon problem" />,
  teamcollaboration: <FaUsers className="icon team" />,
  communication: <FaComments className="icon communication" />,
  timemanagement: <FaClock className="icon time" />,
  criticalthinking: <FaBrain className="icon brain" />,
    };

    return(
        <section id='skills' className="skills-section">
            <h2 className="skills-title">Skills</h2>
      <div className="skills-grid">
        {skills.map((category, index) => (
          <div className="skill-card" key={index}>
            <h3>{category.category}</h3>
            <p>{category.description}</p>
            <div className="skill-icons">
              {category.skills.map((skill, i) => (
                <span key={i}>{iconMap[skill.toLowerCase()] || skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
        </section>
    )

};

