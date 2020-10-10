import express from 'express';
import constants from '../config/constants';
import middlewareConfig from '../config/middleware';
import '../config/database';
import apiRoutes from './modules';
import http from 'http';
import socketio from 'socket.io';

import { msg_create_message} from './modules/message/message.controller'

const app = express();

middlewareConfig(app);

const server = http.createServer(app);
const io = socketio(server);

app.set("io", io);

app.get('/', (req, res) => {
    console.log('user logged:',req.user)
    res.send('Welcome to KoAne');
});

apiRoutes(app);

io.on("connection", socket => {
  //console.log("a user connected :D");
    console.log("User connected" + socket.id);

    //NOTIFICATION

    //welcome notification
    socket.on('submit', (email) => {
        const p1 = "Admin"
        const p2 = email.value
        const p3 = "Welcome"
        msg_create_message("Admin", email.value, "Welcome");
    })

    //MESSAGES

    //chat message
    socket.on("chat message", msg => {
        console.log(msg);
        io.emit("chat message", msg);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected')
    })

});

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