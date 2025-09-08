import Portfolio from "./components/Portfolio.jsx";
import Services from "./components/Services.jsx";
import Skills from "./components/Skill.jsx";
import Experience from "./components/Exp.jsx";
import Project from "./components/Project.jsx";
import Contact from "./components/Contact.jsx";

function App() {
  return (
    <div className="App">
      <Portfolio />
      <Services />
      <Skills/>
      <Experience/>
      <Project/>
      <Contact/>
    </div>
  );
}   
export default App;