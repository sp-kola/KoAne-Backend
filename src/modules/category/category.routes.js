import {Router} from 'express';
const Category = require('./category.model');

const categoryRoutes = new Router();

// View all categories
categoryRoutes.get('/categories', async(req,res) => {
    try {
        const categories = await Category.find();
        res.json(categories);
    } catch (error) {
        res.json({message:error});
    }
});

// Create new category
categoryRoutes.post('/newCategory', async (req,res) => {
    const category = new Category({
        categoryName: req.body.categoryName,
        subCategories: req.body.subCategories
    });
    category.save().then( data => {
        res.json(data);
    }).catch( err => {
        res.json({message:err});
    });
});

// select category by id

// update category by id

// delete category by id

