import Vendor from './vendor.model';

export async function signUp(req, res) {
    try {
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