/* eslint-disable no-invalid-this */
const mongoose = require('mongoose');
import validator from 'validator';
import { hashSync, compareSync } from 'bcrypt-nodejs';
import jwt from 'jsonwebtoken';

import { passwordReg } from './vendor.validations';
import constants from '../../../config/constants';

import Order from '../order/order.model';
import Product from '../product/product.model';

const vendorSchema = new mongoose.Schema({
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
        required: [true, 'Last name is required'],
        trim: true,
    },
    CompanyName: {
        type: String,
        required: [true, 'company name is required'],
        trim: true,
        unique: true,
    },
    contactNo: {
        type: Number,
        required: [true, 'contact number is required'],
        trim: true,
        unique: true,
    },
<<<<<<< HEAD

    businessAddress: {
        type: String,
        trim: true,
    },

    vahicleNumber: {
        type: String,
        trim: true,

=======
    vehicleNo: {
        type: String,
    },
    visitingDates: {
        type: []
    },
    viitingPlaces: {
        type: []
>>>>>>> 17e5d45b4e5036cf7d12b86a983f9e6e02590374
    },
    nic:{
        type:String,
        required: true
    },
    businessName:{
        type:String,
        required: true
    },
    businessAddress:{
        type:String,
        required: true
    },
    bio:{
        type:String,
    },
    delivering: {
        type: Boolean,
        default : false
    }

    deliveryRoutes: {

    },

    deliveryDates: {

    },

    deliveryTime: {
        
    }
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

vendorSchema.virtual('orders', {
    ref: 'Order',
    localField: '_id',
    foreignField: 'vendor'
});

vendorSchema.virtual('products', {
    ref: 'Product',
    localField: '_id',
    foreignField: 'vendor'
});


vendorSchema.pre('save', function (next) {
    if (this.isModified('password')) {
        this.password = this._hashPassword(this.password);
        return next();
    }
    return next();
});

vendorSchema.methods = {
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

const Vendor = mongoose.model('Vendor', vendorSchema);

export default Vendor;