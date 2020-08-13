import express from 'express';
import constants from '../config/constants';
import middlewareConfig from '../config/middleware';
import '../config/database';
import apiRoutes from './modules';
import http from 'http';
import socketio from 'socket.io';

const app = express();

middlewareConfig(app);

const server = http.createServer(app);
const io = socketio(server);

app.get('/', (req, res) => {
    console.log('user logged:',req.user)
    res.send('Welcome to KoAne');
});

apiRoutes(app);

server.listen(constants.PORT, err => {
    if (err) {
        throw err;
    } else {
        // eslint-disable-next-line no-console
        console.log(`
            Server running on port : ${constants.PORT}
            ----
            Running on ${process.env.NODE_ENV}
            ----
        `);
    }
});