import Vendor from './vendor.model';
import User from '../user/user.model'

export async function signUp(req, res) {
    const user = {
        email : req.body.email,
        password : req.body.password,
        userName: req.body.userName,
        type: 'Vendor'
    }
    try {
        await User.create(user);
        const vendor = await Vendor.create(req.body);
        return res.status(201).json(vendor);
    }
    catch (e) {
        return res.status(500).json(e);
    }
}

export function login(req, res, next) {
    res.status(200).json(req.vendor);
    return next();
}