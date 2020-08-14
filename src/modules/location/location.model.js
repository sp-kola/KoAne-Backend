const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        trim: true,
        ref: 'User'
    },
    type: {
        type: String,
        required: true
    },
    position:[],
    // lattitude:{
    //     type: Number,
    //     required: true
    // },
    // longitude: {
    //     type: Number,
    //     required: true
    // },
},{
    timestamps: true
});

function arrayLimit(val) {
    return val.length == 2;
  }

//db.restaurants.createIndex( { 'position' : "2dsphere" } )

locationSchema.index({ 'position' : "2dsphere" });

const Location = mongoose.model('Location',locationSchema);

module.exports = Location;