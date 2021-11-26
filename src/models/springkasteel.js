const mongoose = require ('mongoose');

const SpringkasteelSchema = new mongoose.Schema({
    naam:{type: String},
    huurprijs:{type: Number},
    hoogte:{type: Number},
    breedte:{type: Number},
    diepte:{type: Number},
    maximumPersonen: {type: Number}

}, {
    collection: 'Springkasteel'
});

module.exports = mongoose.model('Springkasteel', SpringkasteelSchema);