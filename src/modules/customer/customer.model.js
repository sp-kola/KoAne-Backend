/* eslint-disable no-invalid-this */
const mongoose = require('mongoose');
const Location = require('../location/location.model')
import validator from 'validator';
import { hashSync, compareSync } from 'bcrypt-nodejs';
import jwt from 'jsonwebtoken';

import { passwordReg } from './customer.validations';
import constants from '../../../config/constants';

import Order from '../order/order.model'

const customerSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },  
    email: {
        type: String,
        unique: true,
        required: [true, 'Email is required'],
        trim: true,
        validate: {
            validator(email) {
                return validator.isEmail(email);
            },
            message: '{VALUE} is not a valid email',
        }
    },
    firstName: {
        type: String,
        required: [true, 'First name is required'],
        trim: true,
    },
    lastName: {
        type: String,
        required: [true, 'First name is required'],
        trim: true,
    },
    userName: {
        type: String,
        required: [true, 'Username is required'],
        trim: true,
        unique: true,
    },
    contactNo: {
        type: Number,
        required: [true, 'contact nummber is required'],
        trim: true,
    },
    // lastReportedLocation:{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Location'
    // },
    deliveryAddresses: [{
        name: String,
        position: []
    }]
}
);

customerSchema.virtual('orders',{
    ref: 'Order',
    localField: '_id',
    foreignField: 'customer'
})

customerSchema.pre('save', function (next) {
    if (this.isModified('password')) {
        this.password = this._hashPassword(this.password);
        return next();
    }
    return next();
});

customerSchema.methods = {
    _hashPassword(password) {
        return hashSync(password);
    },
    // authenticateUser(password) {
    //     return compareSync(password, this.password);
    // },
    createToken() {
        return jwt.sign(
            {
                _id: this._id,
            },
            constants.JWT_SECRET,
        );
    },
    toJSON() {
        return {
            _id: this._id,
            userName: this.userName,
            email: this.email,
            firstName: this.firstName,
            lastName: this.lastName,
            contactNo: this.contactNo,
            lastReportedLocation: this.lastReportedLocation,
            deliveryAddresses: this.deliveryAddresses
            //token: `JWT ${this.createToken()}`,
        };
    },
};

const Customer = mongoose.model('Customer',customerSchema);

export default Customer;
//module.exports = Customer;
// module.exports = {
//     Customer
// }