var express = require('express');
var router = express.Router();
var ListController = require('../../controllers/List.controller');
var Authorization = require('../../auth/authorization');

// Ruta de prueba para listas
router.get('/', function(req, res) {
    res.send('Llegaste a la ruta de api/lists.routes');
});

// Ejemplo de rutas específicas para listas
router.get('/:idUser', Authorization, ListController.getList);
router.post('/:idUser/:nameList', ListController.addToList);


module.exports = router;
