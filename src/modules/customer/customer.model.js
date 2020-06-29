/* eslint-disable no-invalid-this */
const mongoose = require('mongoose');
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
    // contactNo: {
    //     type: Number,
    //     required: [true, 'contact nummber is required'],
    //     trim: true,
    // },
    // password: {
    //     type: String,
    //     required: [true, 'Password is required'],
    //     trim: true,
    //     minlength: [6, 'Password need to be longer!'],
    //     validate: {
    //         validator(password) {
    //             return passwordReg.test(password);
    //         },
    //         message: '[VALUE] is not a valid password!',
    //     }
    // },
});

customerSchema.virtual('customerOrders',{
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
            //token: `JWT ${this.createToken()}`,
        };
    },
};

const Customer = mongoose.model('Customer',customerSchema); 

export default Customer;