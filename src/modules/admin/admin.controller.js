import User from '../user/user.model';
import Admin from './admin.model';
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

export async function signup(req, res, next){
    console.log('Creating an admin')
    const data = {
        email: req.body.email,
        password : req.body.password,
        userName: req.body.userName,
        type: 'Admin'
    }
    try {
        const user = await User.create(data);
        await user.createToken();
        //console.log('User created', user)
        const admin = await Admin.create({
            ...req.body,
            userID: user._id
        });
        return res.status(201).json(user);
    }
    catch (e) {
        return res.status(500).json(e);
    }
    // bcrypt.hash(req.body.password, 10, function(err, hash) {
    //     if (err) {
    //         res.json({
    //             error: err
    //         });
    //     } else {
    //         const admin = new Admin({
    //             username: req.body.username,
    //             email: req.body.email,
    //             password: hash
    //         });
    //         admin
    //             .save()
    //             .then(admin => {
    //                 res.json({
    //                     message: 'Admin Added Successfully'
    //                 });
    //             })
    //             .catch(error => {
    //                 res.json({
    //                     message: 'An error occured!'
    //                 });
    //             })
    //     }

    // });
}