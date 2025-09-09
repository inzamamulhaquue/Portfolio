const express = require('express');
const Hero = require('../models/Hero.js');
const router = express.Router();

// Get Portfolio Data
router.get('/', async (req, res) => {
    try {
        const hero = await Hero.findOne(); // fetch first document
        if (!hero) {
            return res.status(404).json({ message: "No hero data found in database" });
        }
        res.json(hero);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Update hero description
router.put('/', async (req, res) => {
    try {
        const updatedHero = await Hero.findOneAndUpdate(
            {}, // update the first doc
            req.body,
            { new: true, upsert: false } // no auto-create
        );
        if (!updatedHero) {
            return res.status(404).json({ message: "No hero data found to update" });
        }
        res.json(updatedHero);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
