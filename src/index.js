import express from 'express';
import constants from '../config/constants';
import middlewareConfig from '../config/middleware';
import '../config/database';
import apiRoutes from './modules';

const app = express();

middlewareConfig(app);

app.get('/', (req, res) => {
    res.send('Hello world');
});

apiRoutes(app);

app.listen(constants.PORT, err => {
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