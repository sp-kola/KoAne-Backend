const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
    vendor: {
        type: String,
        required: true,
        trim: true
    },
    lattitude:{
        type: Number,
        required: true
    },
    longitude: {
        type: Number,
        required: true
    },
    orders: [{
        order:{
            type: String,
            required: true
        },
        orderStatus: {
            type: Boolean,
            required: true
        },
        lattitude:{
            type: Number,
            required: true
        },
        longitude: {
            type: Number,
            required: true
        },
    }]

},{
    timestamps: true
});


const Location = mongoose.model('Location',locationSchema);

module.exports = Location;