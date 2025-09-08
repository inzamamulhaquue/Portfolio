const mongoose = require('mongoose');

const heroSchema = new mongoose.Schema({
    name: { type: String, required: true },
    title: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    linkedin: { type: String },
    github: { type: String },
    resume: { type: String },
    whatsapp: { type: String },
    description: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('hero', heroSchema);
