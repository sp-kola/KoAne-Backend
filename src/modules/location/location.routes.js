import {Router} from 'express';
import {celebrate, Segments} from 'celebrate';
import *  as LocationController from './location.contrllers';

const routes = new Router();

routes.post('/create', LocationController.createLocation);

routes.get('/get/:id',LocationController.getLocation);

routes.patch('/update/:id',LocationController.updateLocation);

routes.delete('/delete/:id',LocationController.deleteLocation);

routes.get('/getUser/:id',LocationController.getUserLocation);

export default routes;