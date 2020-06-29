const Location = require('./location.model')
const User = require('../user/user.model')

export async function createLocation(req,res){
    const location = new Location(req.body)
    try{
        await location.save()
        res.status(201).json(location)
    }
    catch(e){
        res.status(500).json(`Unable to create location: ${e} `)
    }
}

export async function getUserLocation(req,res){
    const _id = req.params.id 
    try{
        const location = await Location.find({owner: req.params.id})
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