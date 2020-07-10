const express = require('express')
const Order = require('./order.model')
const router = new express.Router()
const Customer = require('../customer/customer.model')
const Vendor = require('../vendor/vendor.model')

router.post('/create', async(req,res) => {
    // const customer = new ObjectID(req.body.customer)
    // const vendor = new ObjectID(req.body.vendor)
    const order = new Order(req.body)
    try{
        await order.save()
        res.status(201).send(order)
    }catch(e){
        res.status(400).send(e)
    }    
})
 
//GET /orders?complted=true
//GET /orders?limit=10&skip=20
//GET /orders?sortBy=createdAt:desc"

router.get('/customerOrders/:id', async(req,res) => {

    // const match = {}

    // const sort = {}

    // if(req.query.completed) {
    //     match.completed = req.query.completed === 'true'
    // }

    // if(req.query.sortBy){
    //     const parts = req.query.sortBy.split(':')
    //     sort[parts[0]] = parts[1] === 'desc' ? -1 : 1
    // }

    //console.log(req.params.id);
    //const customer = await Customer.findById(req.params.id)
    //console.log(customer)
    try{
        //method 1
        const orders = await Order.find({customer: req.params.id})
        //method 2
        
        
        // await customer.populate({
        //     path: 'customerOrders',
        // }).execPopulate()
        res.status(200).send(orders)
    }catch(e){
        res.status(500).send(e)
    }
})

router.get('/vendorOrders/:id', async(req,res) => {

    // const match = {}

    // const sort = {}

    // if(req.query.completed) {
    //     match.completed = req.query.completed === 'true'
    // }

    // if(req.query.sortBy){
    //     const parts = req.query.sortBy.split(':')
    //     sort[parts[0]] = parts[1] === 'desc' ? -1 : 1
    // }

    try{
        //method 1
        const orders = await Order.find({vendor: req.params.id})
        //method 2
        // const vendor = await Vendor.findById(req.params.id)
        // await vendor.populate({
        //     path: 'vendorOrders',
        //     match,
        //     options: {
        //         limit : parseInt(req.query.limit),
        //         skip : parseInt(req.query.skip),
        //         sort 
        //     }
        // }).execPopulate()
        res.status(200).send(orders)
    }catch(e){
        res.status(500).send(e)
    }
})


router.get('/get/:id', async(req,res) => {
    //const _id = req.params.id
    try{
        const order = await Order.findById(req.params.id)
        if(!order){
            return res.status(404).send()
        }
        res.status(200).send(order)
    }catch(e){
        res.status(500).send(e)
    }
})

router.patch('/update/:id',async(req,res) => {
    
    // const _id = req.params.id
     const updates = Object.keys(req.body)
    // const allowedUpdates = ['description','completed']
    // const isValidOperation = updates.every(update => allowedUpdates.includes(update))
    // if(!isValidOperation){
    //     return res.status(400).send({error: 'Invalid updates'})
    // }

    try{
        const order = await Order.findById(req.params.id)
        if(!order){
            return res.status(404).send()
        }

        updates.forEach( update => order[update] = req.body[update] )
        await order.save()

        //const order = await Order.findByIdAndUpdate(_id,req.body, {runValidators: true, new: true})
        res.send(order)
    }catch(e){
        res.status(400).send(e)
    }

})

router.delete('/delete/:id', async(req,res) => {

    const _id = req.params.id
    try{
        const order = await Order.findById(req.params.id)
        if(!order){
            return res.status(404).send()
        }
        res.status(200).send(order)

    }catch(e){

        res.status(500).send()

    }

})

module.exports = router