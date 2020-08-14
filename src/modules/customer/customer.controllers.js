import Customer from './customer.model';
import User from '../user/user.model'

export async function signUp(req, res) {
    const data = {
        email: req.body.email,
        password : req.body.password,
        userName: req.body.userName,
        type: 'Customer'
    }
    try {
        const user = await User.create(data);
        await user.createToken();
        const customer = await Customer.create({
            ...req.body,
            userID: user._id
        });
        return res.status(201).json(customer);
    }
    catch (e) {
        return res.status(500).json(e);
    }
}

// export function login(req, res, next) {
//     res.status(200).json(req.customer);
//     return next();
// }

//user data
export async function me(req,res) {
    console.log(req.user)
    const customer = await Customer.findOne({email: req.user.email})
    console.log(customer)
    res.status(200).send(customer);
}

//update
export async function updateCustomer(req,res){
    const customer = await Customer.findOne({email: req.user.email})
    const updates = Object.keys(req.body)
    const allowedUpdates = ['firstName','lastName','password','email','contactNo','userName']
    const isValidOperation = updates.every( (update) => allowedUpdates.includes(update))

    if(!isValidOperation){
        return res.status(400).send({error: 'Invalid updates'})
    }

    try{
        //update the user data
        console.log('updating user',req.body.email)
        if(req.body.email){
            req.user.email = req.body.email 
        }
        if(req.body.userName){
            req.user.userName = req.body.userName 
        }
        if(req.body.password){
            req.user.password = req.body.password 
        }
        await req.user.save()

        await console.log('updated user: ', req.user)
        //update the customer data
        updates.forEach(update => customer[update] = req.body[update])

        await customer.save()
        //const user = await User.findByIdAndUpdate(_id,req.body,{ new: true, runValidators: true })
        res.send(customer)

    }catch(e){
        res.status(400).send(e)
    }
}

//delete
export async function deleteCustomer(req,res) {
    const _id = req.user._id
    const customer = await Customer.findOne({email: req.user.email})
    try{
        await req.user.remove()
        await customer.remove()
        res.status(200).send(`account holder with ${req.user.userName} userName (${customer.firstName} ${customer.lastName}) account is deleted`)
    }
    catch(e){
        res.status(500).send()
    }
}

