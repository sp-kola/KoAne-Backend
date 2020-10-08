const mongoose = require("mongoose");
const validator = require("validator");


const orderSchema = new mongoose.Schema({
    products: {
        type: Array,
        required: true
    },
    description : {
        type: String,
        trim: true,
    }, 
    status: {
      type: String,
      default: false,
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Customer",
    },
    vendor: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Vendor",
    },
    posotion:[],
    date: {
        type: Date,
        required: true
    }
}
, {
  timestamps: true
})

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
