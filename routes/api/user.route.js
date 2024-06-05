var express = require('express');
var router = express.Router();
var UserController = require('../../controllers/users.controller');

// Ruta para usuarios
router.get('/', function(req, res, next) {
    res.send('Llegaste a la ruta de api/users.routes');
});

router.post('/registration', UserController.createUser);
router.post('/login', UserController.loginUser);
router.get('/validateMail', UserController.validateMail);

module.exports = router;
