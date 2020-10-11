const Message = require('./message.model');
const User = require('./../user/user.model');

exports.msg_get_all_messages = (req, res, next) => {
    //const receiverId = req.params.userId
    //Message.find({ receiver: receiverId })
    Message.find()
        .exec()
        .then(docs => {
            console.log(docs);
            res.json(docs);
        })
        .catch(err => {
            console.log(err);
            res.json({
                error: err
            });
        });
}

exports.msg_create_message = (req,res,pnext3) => {
    //const senderId = req.params.userId
    //const receiverId = req.params.userId
    const message = new Message({
        //sender: p1,
        //receiver: receiverId,
       /* receiver: p2,
        message: p3,*/
        sender:req.body.sender,
        receiver:req.body.receiver,
        message : req.body.message,
        read: false,
        state: 0,
    });
    message
        .save()
        .then(result => {
            console.log(result);
            console.log('Message Send!');
            res.json({
                message: 'Message Send!'
            });
        })
        .catch(err => {
            console.log(err);
           /* res.json({
                error: err
            });*/
        })

}


exports.msg_get_message = (req, res, next) => {
    const user_id = req.params.msgId;

    Message.find({receiver:user_id})
        .exec()
        .then(result => {
            console.log("From database", result);
            res.json(result);
            const senderUsername = result.sender;

            User.find({_id:senderUsername})
            .exec()
            .then(res =>{
                senderUsername = res.userName;
            })
            if (result.read == false) {
                Message.update({ _id: id }, { $set: { read: true } })
                    .exec()
            }
        })
        .catch(err => {
            console.log(err);
            res.json({
                error: err
            });
        })
}


exports.msg_set_read = (req, res, next) => {
    const id = req.params.msgId;
    const updateRead = { read: true }

    Message.update({ _id: id }, { $set: updateRead })
        .exec()
        .then(result => {
            console.log(result);
            res.json({
                message: 'Message Read!'
            });
        })
        .catch(err => {
            console.log(err);
            res.json({
                error: err
            });
        });

}

exports.msg_delete_message = (req, res, next) => {
    const id = req.params.msgId;
    const updateState = { state: 1 }

    Message.update({ _id: id }, { $set: updateState })
        .exec()
        .then(result => {
            console.log(result);
            res.json({
                message: 'Message Deleted!'
            });
        })
        .catch(err => {
            console.log(err);
            res.json({
                error: err
            });
        });
}