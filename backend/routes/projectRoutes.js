const express = require('express');
const Project = require('../models/Projects');
const router = express.Router();


router.get("/", async (req, res) => {
    try{
        const projects = await Project.find().sort({ createdAt: -1});
        res.json(projects);
    } catch (err) {
        res.status(500).json({ error: " Error fetching projects"});
    }
});

router.post("/", async (req, res) => {
    try{
        const newProject = new Project(req.body);
        await newProject.save();
        res.status(201).json(newProject);
    } catch (err) {
        res.status(400).json({ error: " Error adding project"});
    }
});

module.exports = router;