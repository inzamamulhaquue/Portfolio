const express = require ("express");
const Experience = require ("../models/Exp.js");
const router = express.Router();

// Get all experiences
router.get("/", async (req, res) => {
  try {
    const exp = await Experience.find().sort({ createdAt: -1 });
    res.json(exp);
  } catch (err) {
    res.status(500).json({ error: "Error fetching experiences" });
  }
});

// Add experience
router.post("/", async (req, res) => {
  try {
    const newExp = new Experience(req.body);
    await newExp.save();
    res.status(201).json(newExp);
  } catch (err) {
    res.status(400).json({ error: "Error adding experience" });
  }
});

module.exports = router;
