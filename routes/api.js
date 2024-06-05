var express = require('express');
var router = express.Router();
var usersRouter = require('./api/user.route');
var listsRouter = require('./api/lists.route');

router.use('/users', usersRouter);
router.use('/lists', listsRouter);

module.exports = router;
