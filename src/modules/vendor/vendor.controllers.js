import Vendor from './vendor.model';
import User from '../user/user.model';

export async function signUp(req, res) {
    const data = {
        email: req.body.email,
        password: req.body.password,
        userName: req.body.userName,
        type: 'Vendor'
    };
    try {
        const user = await User.create(data);
        const vendor = await Vendor.create({
            ...req.body,
            userID: user._id
        });
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

