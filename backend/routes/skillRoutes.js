const express = require('express');
const router = express.Router();
const Skill = require('../models/Skill');


// GET /api/skills - Retrieve all skills
router.get('/', async (req, res) => {
    try{
        const skills = await Skill.find();
        res.json(skills);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


// POST /api/skills - Create a new skill entry
router.post('/', async (req, res) => {
    try{

        const newSkill = new Skill(req.body);
        await newSkill.save();
        res.status(201).json(newSkill);
    }   catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;