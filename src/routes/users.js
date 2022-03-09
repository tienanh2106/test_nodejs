const express = require('express');
const router = express.Router();
const db =require('../database');

const userController = require('../app/controllers/usersController');

// router.use('/', userController.show);
router.use('/', userController.post);
// router.use('/', userController.index);


module.exports = router;