import mongoose from 'mongoose';
import constants from './constants';

//connect the db with the url provide

try {
    mongoose.connect(constants.MONGO_URL,{
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    });
}
catch (err) {
     mongoose.createConnection(constants.MONGO_URL);
}

mongoose.connection
    .once('open', () => console.log('MongoDB Running'))
    .on('error', e => {
        throw e;
    });

