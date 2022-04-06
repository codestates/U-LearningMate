const express = require('express');
const router = express.Router();

const main = require('./mainRouter.js');
const user = require('./userRouter.js');
const auth = require('./authRouter.js');
//const room = require('./roomRouter.js');
//const mate = require('./mateRouter.js');
//const note = require('./noteRouter.js');
//const message = require('./messageRouter.js');

router.use('/', main);
router.use('/user', user);
router.use('/auth', auth);
// router.use('/room', room);
// router.use('/mate', mate);
// router.use('/note', note);
// router.use('/message', message);

module.exports = router;
