import vendorRoutes from "./vendor/vendor.routes";
import locationRoutes from "./location/location.routes";
import userRoutes from "./user/user.routes";
import customerRoutes from "./customer/customer.routes";
import orderRoutes from "./order/order.routes";
import productRoutes from "./product/product.routes";
import reviewsRoutes from "./reviews _ratings/reviews_ratings.routes";
import { authJwt } from "../services/auth.services";
import reviewsRouter from "./reviews _ratings/reviews_ratings.routes";

export default (app) => {
  app.use("/vendor", vendorRoutes);
  app.use("/customer", customerRoutes);
  app.use("/user", userRoutes);
  app.use("/product", productRoutes);
  app.get("/hello", authJwt, (req, res) => {
    console.log(req);
    res.send("this is a private route");
  });
  app.use("/location", locationRoutes);
  app.use("/order", orderRoutes);
  app.use("/reviews", reviewsRouter);
};
