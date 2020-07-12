const Message = require('./message.model');


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



exports.msg_create_message = (req, res, next) => {
    //const senderId = req.params.userId
    //const receiverId = req.params.userId
    const message = new Message({
        sender: req.body.sender,
        //receiver: receiverId,
        receiver: req.body.receiver,
        message: req.body.message,
        read: false
    });
    message
        .save()
        .then(result => {
            console.log(result);
            res.json({
                message: 'Message Send!'
            });
        })
        .catch(err => {
            console.log(err);
            res.json({
                error: err
            });
        })

}


exports.msg_get_message = (req, res, next) => {
    const id = req.params.msgId;
    Message.findById(id)
        .exec()
        .then(result => {
            console.log("From database", result);
            res.json(result);
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
    Message.findById(id)
        .exec()
        .then(result => {
            if (result.read == true) {
                Message.remove({ _id: id })
                    .exec()
                    .then(result => {
                        console.log(result);
                        res.json({
                            message: 'Deleted the message!'
                        });
                    })
                    .catch(err => {
                        console.log(err);
                        res.json({
                            error: err
                        })
                    });
            } else {
                res.json({
                        message: 'Please read the message'

                    })
                    //redirect to msg_get_message method
            }
        })
        .catch(err => {
            console.log(err);
            res.json({
                error: err
            });
        })
}