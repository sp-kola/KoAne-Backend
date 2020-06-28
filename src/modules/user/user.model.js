/* eslint-disable no-invalid-this */
import mongoose, { Schema } from 'mongoose';
import validator from 'validator';
import { hashSync, compareSync } from 'bcrypt-nodejs';
import jwt from 'jsonwebtoken';

import { passwordReg } from './user.validations';
import constants from '../../../config/constants';

const UserSchema = new Schema({
    email: {
        type: String,
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
    }
});

UserSchema.pre('save', function (next) {
    if (this.isModified('password')) {
        this.password = this._hashPassword(this.password);
        return next();
    }
    return next();
});

UserSchema.methods = {
    _hashPassword(password) {
        return hashSync(password);
    },
    authenticateUser(password) {
        return compareSync(password, this.password);
    },
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
            userName: this.userName,
            type: this.type,
            token: `JWT ${this.createToken()}`,
        };
    },
};

export default mongoose.model('User', UserSchema);