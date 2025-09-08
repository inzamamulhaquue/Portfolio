const express = require("express");
const Service = require("../models/Service");
const router = express.Router();

// Get all services
router.get("/", async (req, res) => {
  try {
    const data = await Service.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Seed data ( run once)
router.post("/seed", async (req, res) => {
  try {
    await Service.deleteMany();
    const data = await Service.insertMany([
      {
        title: "Full Stack Development",
        description: "I build complete, scalable MERN stack applications using Node.js, React, MongoDB, and JavaScript. Services include backend APIs, responsive frontends, secure authentication, database design, performance optimization, deployment, and ongoing support for enterprise or startup projects.",
        icons: ["javascript", "react", "nodejs", "mongodb", "express", "python"],
      },
      {
        title: "Backend Development",
        description: "I specialize in backend development, creating secure, scalable APIs and microservices using Node.js, Express.js, and TypeScript, with expertise in AWS deployment, Docker containerization, cloud-native architecture, and performance optimization.",
        icons: ["nodejs", "mongodb", "express", "postman", "database"],
      },
      {
        title: "Frontend Development",
        description: "I design and develop responsive, user-friendly frontends using React, Redux, Next.js, and Hooks, styled with Tailwind CSS, Bootstrap, HTML, and CSS, ensuring performance, accessibility, seamless UI/UX, and scalable modern web applications.",
        icons: ["react", "html5", "css3", "javascript", "bootstrap", "tailwind" , "nextjs"],
      },
      {
        title: "Cloud DevOps & Security",
        description: "Implementing cloud-native DevOps pipelines with AWS, Docker, Jenkins, GitHub, and Render. Expertise in automation, deployment, monitoring, and enterprise security solutions with CyberArk for secure, scalable, and efficient application delivery.",
        icons: ["github", "aws", "docker", "jenkins", "render", "cyberark"],
      },
    ]);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
