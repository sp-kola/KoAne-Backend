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

// update a product by id
productRoutes.patch('/update/:id', async (req,res) =>{
    try {
        const updatedProduct = await Product.updateOne({_id: req.params.id}, 
            { $set: {   
                        productName : req.body.productName,
                        price: req.body.price,
                        details: req.body.details,
                        category: req.body.category
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