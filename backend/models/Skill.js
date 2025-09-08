const mongoose = require('mongoose');

const skillchema = new mongoose.Schema({
    category :{
        type: String,
        required: true
    },
    description : {
        type: String,
    },
    skills: [String],
});

module.exports = mongoose.model('Skill', skillchema);