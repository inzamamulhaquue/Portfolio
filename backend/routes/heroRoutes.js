const express = require('express');
const Hero = require('../models/Hero.js');
const router = express.Router();

// Get Portfolio Data
router.get('/', async (req, res) => {
    try {
        let data = await Hero.findOne();
        if (!data) {
            data = await Hero.create({
                name: 'Inzamamul Haque',
                title: 'SDE | MERN Stack Developer | CyberArk',
                email: 'inz01haq@gmail.com',
                phone: '+917631856488',
                linkedin: 'https://www.linkedin.com/in/inzamamhaq-bb7275234/',
                github: 'https://github.com/inzamamulhaquue',
                resume: 'https://drive.google.com/file/d/1Vkpud9IYIr0Ykh3yWn_HCkdj2y0tplul/view?usp=drive_link',
                whatsapp: '+917631856488',
                description: 'Full Stack Developer with experience in MERN, AWS, CyberArk and modern web technologies. Skilled in building scalable apps, REST APIs, and delivering high-quality user experiences.'
            });
        }
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Update hero description
router.put('/', async (req, res) => {
    try {
         const updateFields = req.body; // e.g. { name: "...", description: "...", email: "..." }
        const data = await Hero.findOneAndUpdate({}, updateFields, { new: true, upsert: true });
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
