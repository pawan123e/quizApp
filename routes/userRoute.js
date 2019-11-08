const express = require('express');
const router = express.Router();
const {register, login, protect, getUser} = require('../controller/authController')

router.route('/register').post(register);
router.route('/login').post(login);
router.route('/').get(protect, getUser);

module.exports = router;