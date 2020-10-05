import { Router } from 'express';
import { celebrate, Segments } from 'celebrate';
import { authLocal, authJwt } from '../../services/auth.services';
import * as customerController from './customer.controllers';
import customerValidation from './customer.validations';
const multer = require('multer')
const upload = multer({
    //dest: 'src/modules/customer/avatar',
    limits: {
        fileSize: 1000000 //1Mb
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(png|jpg|jpeg)$/)) {
            return cb(new Error('Wrong file type'))
        }
        cb(undefined, true)
    }
})

const routes = new Router();

routes.post('/signup', celebrate({
    [Segments.BODY]: customerValidation.signup_Schema,
}), customerController.signUp);

//routes.post('/login', authLocal, customerController.login);

routes.get('/me', authJwt, customerController.me);

routes.patch('/', authJwt, customerController.updateCustomer);

routes.delete('/', authJwt, customerController.deleteCustomer);

routes.post('/avatar', authJwt, upload.single('upload'), customerController.profilePic, (error, req, res, next) => {
    res.status(400).send({ error: error.message });
});

routes.delete('/avatar', authJwt, customerController.deleteProfilePic);

routes.get('/avatar/:id', customerController.getProfilePic);


export default routes;
