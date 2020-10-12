import {Router} from 'express';
const Product = require('./product.model');
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer({dest: 'uploads/'});

const productRoutes = new Router();

// view all products
productRoutes.get('/', async (req,res) => {
    try{
        const products = await Product.find();
        res.json(products);
    }
    catch(err){
        res.json({message: err});
    }
});

// create a new product
productRoutes.post('/create',upload.single('productImage.png'), (req,res)=>{
    // console.log(req.file);
    
    const product = new Product({
        productName: req.body.productName,
        price: req.body.price,
        details: req.body.details,
        category: req.body.category,
        vendor: req.body.vendor,
        image: req.file 
    });
    product.save().then( data => {
        res.json(data);
    }).catch( err => {
        res.json({message: err});
    });
});

// select a product by id 
productRoutes.get('/get/:id', async (req,res) => {
    try{
        const _id = req.params.id;
        const product = await Product.findById(_id);
        res.json(product);
    }
    catch(err){
        res.json({message: err});
    }   
});

// search a product by name
productRoutes.get('/getproduct/:name', async (req,res) => {
    try {
        const findname = req.params.name;
        // console.log(findname);
        const objs = await Product.find({productName:{ $regex:'.*'+findname+'.*'} });
        console.log(objs);
        res.json(objs);
    } catch (error) {
        res.json({message: error});        
    }
})

//get by vendors ID
productRoutes.get('/vendorProducts/:id', async(req,res) => {


    try{
        const products = await Product.find({vendor: req.params.id});
        //method 2
        const vendor = await Vendor.findById(req.params.id);
        // console.log(vendor);
        await vendor.populate({
            path: 'products',
            //match,
            // options: {
            //     limit : parseInt(req.query.limit),
            //     skip : parseInt(req.query.skip),
            //     sort 
            // }
        }).execPopulate();
        res.status(200).send(products);
    }catch(e){
        res.status(500).send(e);
    }
});

// update a product by id
productRoutes.patch('/update/:id', async (req,res) =>{
    try {
        const updatedProduct = await Product.updateOne({_id: req.params.id}, 
            { $set: {   
                        productName : req.body.productName,
                        price: req.body.price,
                        details: req.body.details,
                        category: req.body.category,
                        vendor: req.body.vendor
                    }
        });
        res.json(updatedProduct);
    }catch(err){
        res.json({message: err});
    }
});

// delete a product
productRoutes.delete('/delete/:id', async(req,res) => {
    try{
        const remProduct = await Product.remove({_id: req.params.id});
        res.json(remProduct);
    }catch(err){
        res.json({message: err});
    }
});

export default productRoutes;