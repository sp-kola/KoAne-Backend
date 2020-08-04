const express = require('express');
const router = express.Router();

const AdminController = require('./admin.controller');
router.post('/signup', AdminController.signup);

module.exports = router;