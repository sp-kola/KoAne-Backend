const express = require('express');
const router = express.Router();

const messageController = require('./message.controller');
router.get('/', messageController.msg_get_all_messages);
//router.get('/:userId', messageController.msg_get_all_messages);
router.post('/', messageController.msg_create_message);
//router.post('/:userId', messageController.msg_create_message);
router.get('/:msgId', messageController.msg_get_message);
router.put('/:msgId', messageController.msg_set_read);
router.delete('/:msgId', messageController.msg_delete_message);

module.exports = router;