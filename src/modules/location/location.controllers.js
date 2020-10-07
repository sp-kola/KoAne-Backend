const Location = require('./location.model')
const User = require('../user/user.model')
import Customer from '../customer/customer.model';

//let io = app.get("io");

export async function createLocation(req,res){
    console.log(req.body)
    let flag = false;
    let sendLocation = null;
    var data = {
        position:[
            req.body.lattitude,
            req.body.longitude,
        ],
        owner: req.user._id,
        type: req.user.type,
        //owner: req.body.owner,
        // type: req.body.type
    }
    const checkLocation = await Location.findOne({owner: req.user._id})
    console.log(checkLocation)
    if(checkLocation !== null){
        console.log('already a location exist for the current user, hence updating the location');
        try{
            //console.log(req.body.lattitude, req.body.longitude)
            checkLocation.position = [req.body.lattitude, req.body.longitude] 
            //console.log('updated location',checkLocation)
            await checkLocation.save()
            //res.status(201).json(checkLocation)
            sendLocation = checkLocation;
            flag = true
        }
        catch(e){
            res.status(500).json(`Unable to update location: ${e} `)
            flag = false
        }
    }
    else{
        const location = new Location(data)
        try{
            await location.save()
            //res.status(201).json(location)
            sendLocation = location;
            flag = true
        }
        catch(e){
            res.status(500).json(`Unable to create location: ${e} `)
            flag = false
        }
    }
    if(flag){
        if(req.user.type == 'Customer'){
            //const customer = await Customer.findOne({email: req.user.email})
            const customer = await Customer.findOne({email: req.user.email})
            console.log('customer', customer)
            try{
                //customer.lastReportedLocation = [req.body.lattitude,req.body.longitude]
                customer.lastReportedLocation = sendLocation._id
                let postionData = [req.body.lattitude, req.body.longitude]
                customer.deliveryAddresses.push({
                    position: postionData}
                );
                await customer.save()    
                res.status(201).json(customer)
            }
            catch(err){
                res.status(500).json(`Unable to create location: ${e} `)    
            }

        }
        else{
           //vendor 
           res.status(201).json(sendLocation)    
        }
    }
    
}

export async function getUserLocation(req,res){
    const _id = req.user._id 
    try{
        const location = await Location.find({owner: _id})
        //const user = await User.findById(req.params.id)
        //await user.populate({path: 'locations'}).execPopulate()
        res.status(200).send(location)
    }
    catch(e){
        res.status(500).send(e)
    }
}



export async function getLocation(req,res){
    const _id = req.params.id
    const location = await Location.findById(_id)
    if(!location){
        res.status(404).send('No data found')
    }
    else{
        res.send(location)
    }    

}

//read other user's locations
export async function getUsersNear(req,res) {
    //console.log(req.io)
    // console.log('IO: ', io);
    // io.on('connect', socket => {
    //    // handle various socket connections here
    // });
    const _id = req.user._id 
    try{
        const location = await Location.findOne({owner: _id})
        console.log('user location', location.position[0])
        var lat = location.position[0]
        var lan = location.position[1]
        const type = location.type
        var query = type == 'Vendor' ? 'Customer' : 'Vendor'
        var nearUsers = await Location.aggregate([
                            {
                            $geoNear: {
                                near: { type: "Point", coordinates: [ lat,lan ] },
                                distanceField: "dist.calculated",
                                maxDistance: 2000,
                                query: { type : query },
                                includeLocs: "dist.location",
                                spherical: true
                            }
                            }
                        ])
        nearUsers.splice(0,1)
        res.status(200).send(nearUsers)
    }
    catch(e){
        res.status(500).send(e)
    }
}

//get same type users
export async function getSameUsersNear(req,res) {
    const _id = req.user._id 
    try{
        const location = await Location.findOne({owner: _id})
        console.log('user location', location.position[0])
        var lat = location.position[0]
        var lan = location.position[1]
        const type = location.type
        var query = type == 'Vendor' ? 'Vendor' : 'Customer'
        var nearUsers = await Location.aggregate([
                            {
                            $geoNear: {
                                near: { type: "Point", coordinates: [ lat,lan ] },
                                distanceField: "dist.calculated",
                                maxDistance: 2000,
                                query: { type : query },
                                includeLocs: "dist.location",
                                spherical: true
                            }
                            }
                        ])
        nearUsers.splice(0,1)
        res.status(200).send(nearUsers)
    }
    catch(e){
        res.status(500).send(e)
    }
}

// db.places.aggregate([
//     {
//       $geoNear: {
//          near: { type: "Point", coordinates: [ -73.99279 , 40.719296 ] },
//          distanceField: "dist.calculated",
//          maxDistance: 2,
//          query: { category: "Parks" },
//          includeLocs: "dist.location",
//          spherical: true
//       }
//     }
//  ])

export async function updateUserLocation(req,res){
    const _id = req.user._id 
    const location = await Location.findOne({owner: _id})
    console.log('location to update',location)
    if(!location){
        return res.status(404).send('Invalid updation')
    }
    const updates = Object.keys(req.body)
    const allowedUpdates = ['lattitude','longitude']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
    if(!isValidOperation){
        return res.status(400).send({error: 'Invalid updates'})
    }
    try{
        // updates.forEach(update => {
        //     location[update] = req.body[update]
            
        // })
        location.position = [req.body.lattitude, req.body.longitude]
        console.log('updated location',location)
        await location.save()
        res.send(location)
    }
    catch(e){
        return res.status(400).json('Unable to update the location')
    }
}

export async function updateLocation(req,res){
    const _id = req.params.id
    const location = await Location.findById(_id)
    if(!location){
        return res.status(404).send('Invalid updation')
    }
    const updates = Object.keys(req.body)
    const allowedUpdates = ['lattitude','longitude']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
    if(!isValidOperation){
        return res.status(400).send({error: 'Invalid updates'})
    }
    try{
        updates.forEach(update => {
            location[update] = req.body[update]
            
        })
        await location.save()
        res.send(location)
    }
    catch(e){
        return res.status(400).json('Unable to update the location')
    }
}

export async function deleteUserLocation(req,res){
    const _id = req.user._id
    console.log(_id)
    const location = await Location.findOne({owner: _id})
    console.log('deleting locatin',location)
    if(!location){
        return res.status(404).send('Invalid deletion')
    }    
    try{
        await location.remove()
        res.status(200).send(location)
    }
    catch(e){
        res.status(500).send()
    }
}

export async function deleteLocation(req,res){
    const _id = req.params.id
    console.log(_id)
    const location = await Location.findById(_id)
    console.log(location)
    if(!location){
        return res.status(404).send('Invalid deletion')
    }    
    try{
        await location.remove()
        res.status(200).send(location)
    }
    catch(e){
        res.status(500).send()
    }
}