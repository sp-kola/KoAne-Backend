import Customer from './customer.model';
import User from '../user/user.model'

export async function signUp(req, res) {
    const user = {
        email : req.body.email,
        password : req.body.password,
        userName: req.body.userName,
        type: 'Customer'
    }
    try {
        await User.create(user);
        const customer = await Customer.create(req.body);
        return res.status(201).json(customer);
    }
    catch (e) {
        return res.status(500).json(e);
    }
}

export function login(req, res, next) {
    res.status(200).json(req.customer);
    return next();
}