const express = require('express');
const router = express.Router();
const { auth } = require('../controllers');

router.post('/auth', auth.auth);

module.exports = router;