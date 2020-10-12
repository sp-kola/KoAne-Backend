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

// update category by id

// delete category by id

export default categoryRoutes;