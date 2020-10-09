import {Router} from 'express';
import {celebrate, Segments} from 'celebrate';
import { authLocal, authJwt } from '../../services/auth.services';
import *  as LocationController from './location.controllers';

const routes = new Router();

//create a location for a user in the system
routes.post('/',authJwt, LocationController.createLocation);

//read a location related to a user
routes.get('/user/',authJwt,LocationController.getUserLocation);

//update a location related to a user
routes.patch('/user/',authJwt,LocationController.updateUserLocation);

//delete a location related to a user
routes.delete('/user/',authJwt,LocationController.deleteUserLocation);

//get near users
routes.get('/users/',authJwt,LocationController.getUsersNear);

//get same type users
routes.get('/compete/',authJwt,LocationController.getSameUsersNear);

routes.get('/getUser/:id',authJwt,LocationController.getUserLocation);

export default routes;