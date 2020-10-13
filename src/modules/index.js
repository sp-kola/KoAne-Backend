
import vendorRoutes from './vendor/vendor.routes';
import locationRoutes from './location/location.routes';
import userRoutes from './user/user.routes';
import customerRoutes from './customer/customer.routes';
import orderRoutes from './order/order.routes';
import productRoutes from './product/product.routes';
import AdminRoutes from './admin/admin.routes';
import messageRoutes from './message/message.routes';
import categoryRoutes from './category/category.routes';
import { authJwt } from '../services/auth.services';

export default app => {

    let io = app.get("io");

    app.use('/vendor', vendorRoutes);
    app.use('/customer', customerRoutes);
    app.use('/user', userRoutes);
    app.use('/product', productRoutes);
    app.get('/hello', authJwt, (req, res) => {
        console.log(req)
        res.send('this is a private route');
    });
    app.use('/order', orderRoutes);
    app.use('/admin', AdminRoutes);
    app.use('/message', messageRoutes);
    app.use('/category', categoryRoutes);
    app.use('/location',(req,res,next)=> {
        req.io = io
        next()
    }, locationRoutes);
    
};
