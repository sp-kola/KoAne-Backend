import Joi from '@hapi/joi';

export const passwordReg = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;

const signup_Schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().regex(passwordReg).required(),
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    userName: Joi.string().required(),
    contactNo: Joi.string().required(),
    nic:Joi.string().required(),
    businessName: Joi.string().required(),
    businessAddress: Joi.string().required()
}
);

export default {
    signup_Schema
}; 