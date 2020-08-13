import User from './user.model';

export async function login(req, res, next) {
    //console.log('in login',req.user)
    var user = await req.user
    console.log('user data: ',user)
    user = {
        id: user.id,
        email: user.email,
        type: user.type,
        userName: user.userName,
        token: user.token
    }
    await res.status(200).json(user);
    return next();
}

export async function logout(req, res, next) {
    try{
        console.log(req.user.token)
        req.user.token = ''
        await req.user.save()
        res.status(200).send('Successfully logged out') 
        return next()       
    }
    catch(e){
        res.status(500).send() 
        return next()
    }
}