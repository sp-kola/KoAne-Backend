import vendorRoutes from './vendor/vendor.routes';
import locationRoutes from './location/location.routes';
import { authJwt } from '../services/auth.services';

export default app => {
    app.use('/vendor', vendorRoutes);
    app.get('/hello', authJwt, (req, res) => {
        res.send('this is a private route');
    });
    app.use('/location',locationRoutes)
};