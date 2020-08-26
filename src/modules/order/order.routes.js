import { authLocal, authJwt } from '../../services/auth.services';
const express = require('express')
const Order = require('./order.model')
const router = new express.Router()
const Customer = require('../customer/customer.model')
const Vendor = require('../vendor/vendor.model')

router.post('/create',authJwt, async(req,res) => {
    const data = {
        products : req.body.products,
        description: req.body.description,
        completed: 'NC', //not complete
        customer: req.user._id,
        vendor: req.body.vendor,
        position:[
            req.body.lattitude,
            req.body.longitude,
        ],
        date: req.body.date,
    }

    const order = new Order(req.body)
    try{
        await order.save()
        res.status(201).send(order)
    }catch(e){
        res.status(400).send(e)
    }    
})
 
router.get('/customerOrders',authJwt,async(req,res) => {
    const id = req.user._id
    try{
        const orders = await Order.find({customer: id})
        res.status(200).send(orders)
    }catch(e){
        res.status(500).send(e)
    }
})

router.get('/vendorOrders',authJwt, async(req,res) => {

    const id = req.user._id
    try{
        const orders = await Order.find({vendor:id})
        res.status(200).send(orders)
    }catch(e){
        res.status(500).send(e)
    }
})

//get order by id
router.get('/get/:id',authJwt, async(req,res) => {
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

//delivering status
router.patch('/deliver/:id',authJwt,async(req,res) => {
   try{
       const order = await Order.findById(req.params.id)
       if(!order){
           return res.status(404).send()
       }
       order.status = 'D' //D -> delivering
       await order.save()

       //const order = await Order.findByIdAndUpdate(_id,req.body, {runValidators: true, new: true})
       res.send(order)
   }catch(e){
       res.status(400).send(e)
   }

})

//complete status
router.patch('/deliver/:id',authJwt,async(req,res) => {
    try{
        const order = await Order.findById(req.params.id)
        if(!order){
            return res.status(404).send()
        }
        order.status = 'C' //C -> Completed
        await order.save()
 
        //const order = await Order.findByIdAndUpdate(_id,req.body, {runValidators: true, new: true})
        res.send(order)
    }catch(e){
        res.status(400).send(e)
    }
 
 })

//update order
router.patch('/update/:id',authJwt,async(req,res) => {
    
     const updates = Object.keys(req.body)

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

//delete an order
router.delete('/delete/:id',authJwt,async(req,res) => {

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