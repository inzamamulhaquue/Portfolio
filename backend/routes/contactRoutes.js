const express = require('express');
const Contact = require('../models/Contact');
const router = express.Router();


router.get("/", async (req, res) => {
    try{
        const contacts = await Contact.find();
        res.json(contacts);
    } catch (err) {
        res.status(500).json({ error: " Error fetching contact"});
    }
});

router.post("/", async (req, res) => {
    try{
         console.log("Incoming Data:", req.body);
        const newContact = new Contact(req.body);
        await newContact.save();
        res.status(201).json(newContact);
    } catch (err) {
         console.log("Incoming Data:", req.body);
        res.status(400).json({ error: " Error adding contact"});
    }
});

module.exports = router;