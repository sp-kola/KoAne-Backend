import { Router } from 'express';
import { celebrate, Segments } from 'celebrate';
import { authLocal, authJwt } from '../../services/auth.services';
import * as customerController from './customer.controllers';
import customerValidation from './customer.validations';


const routes = new Router();

routes.post('/signup', celebrate({
    [Segments.BODY]: customerValidation.signup_Schema,
}), customerController.signUp);

//routes.post('/login', authLocal, customerController.login);

routes.get('/',authJwt,customerController.me);

routes.patch('/',authJwt,customerController.updateCustomer);

routes.delete('/',authJwt,customerController.deleteCustomer);

export default routes;
