const express = require('express');
const router = express.Router();
const { user } = require('../controllers');

router.post('/signup', user.signup.post);
router.post('/login', user.login.post);

module.exports = router;