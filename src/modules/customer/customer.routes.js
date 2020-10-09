import { Router } from 'express';
import { celebrate, Segments } from 'celebrate';
import { authLocal, authJwt } from '../../services/auth.services';
import * as customerController from './customer.controllers';
import customerValidation from './customer.validations';
const express = require('express')
const fs = require('fs')
const bodyParser = require('body-parser')
const multer = require('multer')
const upload = multer({
    //dest: 'src/modules/customer/avatar',

    limits:{
        fileSize: 10000000 //10Mb

    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(png|jpg|jpeg)$/)) {
            return cb(new Error('Wrong file type'))
        }
        cb(undefined, true)
    }
})

const routes = new Router();

//routes.use(bodyParser.urlencoded({ extended: true }))
//routes.use(bodyParser.json({ limit: '15mb' }))
// routes.use(bodyParser.json({limit: '50mb'}));
// routes.use(bodyParser.urlencoded({
//     limit: '50mb',
//     parameterLimit: 1000000,
//     extended: true 
//   }));

routes.post('/image',authJwt, (req, res) => {
    fs.writeFile('./out.png', req.body.imgsource, 'base64', (err) => {
      if (err) throw err
    })
    res.status(200)
  })


routes.post('/signup', celebrate({
    [Segments.BODY]: customerValidation.signup_Schema,
}), customerController.signUp);

//routes.post('/login', authLocal, customerController.login);

routes.get('/me', authJwt, customerController.me);

routes.patch('/', authJwt, customerController.updateCustomer);

routes.delete('/', authJwt, customerController.deleteCustomer);

routes.post('/avatar',authJwt,upload.single('upload'),customerController.profilePic,(error,req,res,next) => {
    console.log(error)
    res.status(400).send({error: error.message});
});


// routes.post('/avatar',authJwt,upload.array(),customerController.profilePic,(error,req,res,next) => {
//     console.log(error)
//     res.status(400).send({error: error.message});
// });


routes.delete('/avatar',authJwt,customerController.deleteProfilePic);


routes.get('/avatar/:id', customerController.getProfilePic);


export default routes;
