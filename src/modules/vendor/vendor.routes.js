import { Router } from 'express';
import { celebrate, Segments } from 'celebrate';
import { authLocal } from '../../services/auth.services';
import * as vendorController from './vendor.controllers';
import vendorValidation from './vendor.validations';


const routes = new Router();

routes.post('/signup', celebrate({
    [Segments.BODY]: vendorValidation.signup_Schema,
}), vendorController.signUp);

//routes.post('/login', authLocal, vendorController.login);

export default routes;
