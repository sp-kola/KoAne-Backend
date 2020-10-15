import {Router} from 'express';
const bodyParser = require('body-parser');
const Category = require('./category.model');

const categoryRoutes = new Router();

categoryRoutes.use(bodyParser.urlencoded({
    extended: true
  }));
// View all categories
categoryRoutes.get('/', async(req,res) => {
    try {
        const categories = await Category.find();
        res.json(categories);
    } catch (error) {
        res.json({message:error});
    }
});

// Create new category
categoryRoutes.post('/add', async (req,res) => {
    // console.log(req.body);
    // req empty
    const category = new Category({
        categoryName: req.body.categoryName
    });
    category.save().then( data => {
        res.json(data);
    }).catch( err => {
        res.json({message:err});
    });
});

// select category by id
categoryRoutes.get('/get/:id', async (req,res) => {
    try{
        const _id = req.params.id;
        const category = await Category.findById(_id);
        res.json(category);
    }
    catch(err){
        res.json({message: err});
    }   
});

// update category by id
categoryRoutes.patch('/update/:id', async (req,res) =>{
    try {
        const updatedCat = await Category.updateOne({_id: req.params.id}, 
            { $set: {   
                        CategoryName : req.body.productName
                    }
        });
        res.json(updatedCat);
    }catch(err){
        res.json({message: err});
    }
});

// delete category by id
categoryRoutes.delete('/delete/:id', async(req,res) => {
    try{
        const remCat = await Category.remove({_id: req.params.id});
        res.json(remCat);
    }catch(err){
        res.json({message: err});
    }
});

export default categoryRoutes;