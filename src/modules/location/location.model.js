const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        trim: true,
        ref: 'User'
    },
    lattitude:{
        type: Number,
        required: true
    },
    longitude: {
        type: Number,
        required: true
    },

},{
    timestamps: true
});


const Location = mongoose.model('Location',locationSchema);

module.exports = Location;