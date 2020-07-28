const Admin = require('./admin.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10, function(err, hash) {
        if (err) {
            res.json({
                error: err
            });
        } else {
            const admin = new Admin({
                username: req.body.username,
                email: req.body.email,
                password: hash
            });
            admin
                .save()
                .then(admin => {
                    res.json({
                        message: 'Admin Added Successfully'
                    });
                })
                .catch(error => {
                    res.json({
                        message: 'An error occured!'
                    });
                })
        }

    });


}