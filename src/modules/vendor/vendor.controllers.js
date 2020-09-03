import Vendor from './vendor.model';
import User from '../user/user.model';
import e from 'express';

export async function signUp(req, res) {
    const data = {
        email: req.body.email,
        password: req.body.password,
        userName: req.body.userName,
        type: 'Vendor'
    };
    try {
        const user = await User.create(data);
        await user.createToken();

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

export async function getVendorById(req,res) {
    _id = req.Vendor._id;
    const vendor = await Vendor.findById(_id);
    if(!vendor){
        res.status(500).json(e);
    }
    else{
        res.status(200).json(vendor);
    }

}

export async function getAllVendors(){
    Vendor.find({}, function(err, vendor){
        if(err){
            res.send(err);
        }
        else{
            res.json(vendor);
        }
    });
}

export async function updateVendor(){
    Vendor.findByIdAndUpdate(req.body.id,req.body, {new: true}, function(err,payment){
        if(err)
            res.send(err);
        res.json(payment);
    });

}

export async function deleteVendor(){
    Vendor.
}
