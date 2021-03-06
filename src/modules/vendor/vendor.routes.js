import { Router } from 'express';
import { celebrate, Segments } from 'celebrate';
import { authLocal, authJwt } from '../../services/auth.services';
import * as vendorController from './vendor.controllers';
import vendorValidation from './vendor.validations';
const multer = require('multer');
const upload = multer({
    //dest: 'src/modules/customer/avatar',
    limits: {
        fileSize: 1000000 //1Mb
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(png|jpg|jpeg)$/)) {
            return cb(new Error('Wrong file type'));
        }
        cb(undefined, true);
    }
});
const routes = new Router();

routes.post('/signup', celebrate({
    [Segments.BODY]: vendorValidation.signup_Schema,
}), vendorController.signUp);

//routes.post('/login', authLocal, vendorController.login);


routes.post('/avatar', authJwt, upload.single('upload'), vendorController.profilePic, (error, req, res, next) => {
    res.status(400).send({ error: error.message });
});

routes.delete('/', vendorController.deleteVendor);

routes.delete('/avatar', authJwt, vendorController.deleteProfilePic);

routes.get('/avatar/:id', vendorController.getProfilePic);

routes.get('/allVendors', authJwt, vendorController.getAllVendors);

routes.get('/vendorbyName', authJwt, vendorController.getVendorByName);

routes.get('/vendor', authJwt, vendorController.getVendorById);

routes.get('/search/:id', authJwt, vendorController.searchById);

routes.patch('/', authJwt, vendorController.updateVendor);

routes.delete('/', authJwt, vendorController.deleteVendor);

export default routes;
