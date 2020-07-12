import { Router } from 'express';
import { celebrate, Segments } from 'celebrate';
import { authLocal } from '../../services/auth.services';
import * as userController from './user.controllers';
import userValidation from './user.validations';


const routes = new Router();

routes.post('/login', authLocal, userController.login);

export default routes;