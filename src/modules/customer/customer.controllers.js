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

export function login(req, res, next) {
    res.status(200).json(req.customer);
    return next();
}

//logout
export function logout(req, res, next) {
    try{
        
    }
    catch(e){

    }
}

//user data
//update
//delete
