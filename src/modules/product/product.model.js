const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({

    productName: {
        type: String,
        // required: [true, 'Product name is required'],
        // trim: true,
    },
    price: {
        type: Number,
        // required: [true, 'Price is required'],
        // trim: true,
    },
    details: {
        type: String,
        // trim: true,
    },
    category:{
        type: [String],
        // required: [true, 'At least one category is required']
    },
    image: {
        data: Buffer,
        ContentType: String 
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    vendor : {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Vendor'
    },

});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
