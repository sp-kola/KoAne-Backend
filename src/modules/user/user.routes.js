import { Router } from 'express';
import { celebrate, Segments } from 'celebrate';
import { authLocal, authJwt } from '../../services/auth.services';
import * as userController from './user.controllers';
import userValidation from './user.validations';


const routes = new Router();

routes.post('/login', authLocal,userController.login);

routes.patch('/logout',authJwt, userController.logout)

export default routes;
