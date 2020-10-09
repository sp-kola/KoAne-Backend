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

        const vendorData = {
            email: req.body.email,
            userName: req.body.userName,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            contactNo: req.body.contactNo,
            nic: req.body.nic,
            businessName: req.body.businessName,
            businessAddress: req.body.businessAddress,
            userID: user._id
        };

        const vendor = await Vendor.create(vendorData);
        //await vendor.save();
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

export async function getVendorById(req, res) {
    _id = req.body._id;
    const vendor = await Vendor.findById(_id);
    if (!vendor) {
        res.status(500).json(e);
    }
    else {
        res.status(200).json(vendor);
    }

}

export async function getAllVendors() {
    Vendor.find({}, function (err, vendor) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(vendor);
        }
    });
}

export async function updateVendor() {
    Vendor.findByIdAndUpdate(req.body.id, req.body, { new: true }, function (err, payment) {
        if (err)
            res.send(err);
        res.json(payment);
    });

}

export async function deleteVendor() {

}

export async function profilePic(req, res) {
    const buffer = await sharp(req.file.buffer).resize({ width: 250, height: 250 }).png().toBuffer();
    req.user.avatar = buffer;
    await req.user.save();
    res.status(200).send();
}

export async function deleteProfilePic(req, res) {
    req.user.avatar = undefined;
    await req.user.save();
    res.status(200).send();
}

//pro pic
export async function getProfilePic(req, res) {
    try {
        const user = await User.findById(req.params.id);

        if (!user || !user.avatar) {
            throw new Error();
        }

        res.set('Content-Type', 'image/png');
        res.send(user.avatar);

    }
    catch (e) {
        res.status(404).send();
    }

}