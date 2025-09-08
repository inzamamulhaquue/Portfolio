const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    platform:{ type : String, required : true},
    value: { type : String, required: true},
    link : { type : String}
}, {timestamps: true});

module.exports = mongoose.model("Contact", contactSchema);  