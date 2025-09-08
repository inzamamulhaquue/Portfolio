const mongoose = require ('mongoose');

const projectSchema = new mongoose.Schema({
    title: {type : String, required : true},
    logo: {type: String},
    link : { type : String},
    description : {type: String, required : true},
    technologies : {type: String}
}, {timestamps: true});

module.exports = mongoose.model("Project", projectSchema);