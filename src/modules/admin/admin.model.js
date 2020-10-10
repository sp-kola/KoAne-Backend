const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminSchema = new Schema({
    username: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/
    },
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
});

const Admin = mongoose.model('Admin', adminSchema);

export default Admin;