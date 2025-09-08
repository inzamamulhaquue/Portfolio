const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  title: { type: String, required: true },      // e.g. "Full Stack"
  description: { type: String, required: true }, // short text
  icons: [String], // array of icon names or URLs
}, { timestamps: true });

module.exports = mongoose.model("Service", serviceSchema);
