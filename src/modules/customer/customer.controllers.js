import User from '../user/user.model';
import Customer from '../customer/customer.model';

const sharp = require('sharp')

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
    console.log('in update ',req.user.email, updates)
    const allowedUpdates = ['firstName','lastName','password','email','contactNo','userName','deliveryAddresses']
    const isValidOperation = updates.every( (update) => allowedUpdates.includes(update))

    if(!isValidOperation){
        return res.status(400).send({error: 'Invalid updates'})
    }

    try{
        //update the user data
        console.log('updating user')
        console.log('customer in update', customer)
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
        await updates.forEach(update => {
            console.log(update, req.body[update])
            customer[update] = req.body[update]
        })
        console.log('done update customer', customer)
        const updatedCustomer = customer
        await updatedCustomer.save()
        //const user = await User.findByIdAndUpdate(_id,req.body,{ new: true, runValidators: true })
        res.send(customer)

    }catch(e){
        console.log(e)
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

//profile pic
export async function profilePic(req,res) {
    // console.log('req ', req.body.formdata)
    // const buffer = await sharp(req.file.buffer).resize({width:250, height: 250}).png().toBuffer()
    // req.user.avatar = buffer
    try{
        req.user.profilePic = {
            image: req.body.image,
            uri: req.body.uri
        }  
        var user = await req.user.save()
        console.log('seaved user', user)
        res.status(200).send(user);
    }
    catch(e){
        console.log(e)
        res.status(500).send()
    }
    
}

// export async function profilePic(req,res) {
//     var base64Data = req.body.image;
//     console.log('writing file...', base64Data);
//     fs.writeFile(__dirname + "/upload/out.png", base64Data, 'base64', function(err) {
//         if (err) console.log(err);
//         fs.readFile(__dirname + "/upload/out.png", function(err, data) {
//             if (err) throw err;
//             console.log('reading file...', data.toString('base64'));
//             res.send(data);
//         });
//     });
// }

export async function deleteProfilePic(req,res) {
    req.user.avatar = undefined  
    await req.user.save()
    res.status(200).send();
}

export async function getProfilePic(req,res) {
    try{
        const user = await User.findById(req.params.id)

        if(!user || !user.avatar){
            throw new Error()
        }

        res.set('Content-Type','image/png')
        res.send(user.avatar)

    }
    catch(e){
        res.status(404).send()
    }
}


