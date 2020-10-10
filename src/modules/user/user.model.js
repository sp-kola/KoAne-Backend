/* eslint-disable no-invalid-this */
const mongoose = require('mongoose');
import validator from 'validator';
import { hashSync, compareSync } from 'bcrypt-nodejs';
import jwt from 'jsonwebtoken';

import { passwordReg } from './user.validations';
import constants from '../../../config/constants';

const userSchema = new mongoose.Schema({
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
    userName: {
        type: String,
        required: [true, 'Username is required'],
        trim: true,
    },
    avatar: {
        type: Buffer
    },
    profilePic: {
        type: []
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        trim: true,
        minlength: [6, 'Password need to be longer!'],
        validate: {
            validator(password) {
                return passwordReg.test(password);
            },
            message: '[VALUE] is not a valid password!',
        }
    },
    type: {
        type: String,
        required: true
    },
    token : {
        type: String,
        //required: true
    }
});

userSchema.virtual('vendors',{
    ref: 'Vendor',
    localField: '_id',
    foreignField: 'userID'
})

userSchema.virtual('customers',{
    ref: 'Customer',
    localField: '_id',
    foreignField: 'userID'
})

userSchema.virtual('admins',{
    ref: 'Admin',
    localField: '_id',
    foreignField: 'userID'
})

userSchema.virtual('locations',{
    ref: 'Location',
    localField: '_id',
    foreignField: 'owner'
})

userSchema.pre('save', function (next) {
    //this.createToken();
    if (this.isModified('password')) {
        this.password = this._hashPassword(this.password);
        return next();
    }
    return next();
});

userSchema.methods = {
    _hashPassword(password) {
        return hashSync(password);
    },
    authenticateUser(password) {
        return compareSync(password, this.password);
    },
    async createToken() {
        //console.log('creating token')
        var token = jwt.sign(
            {
                _id: this._id,
            },
            constants.JWT_SECRET,
        );
        this.token = token
        await this.save()
        //console.log('in creating token',this, token)
        return token;
    },
    async toJSON() {
        //await this.createToken()
        console.log(this)
        var user = {
            userName: this.userName,
            type: this.type,
            token: this.token,    
        }
        console.log('user to json',user)
        return user
    },
};

const User = mongoose.model('User',userSchema);

export default User;

//export default mongoose.model('User', UserSchema);