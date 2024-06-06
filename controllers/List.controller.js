const ListService = require('../services/list.service');
const Joi = require('joi');

exports.getList = async function (req, res, next) {
    try {
        const schema = Joi.object({
            idUser: Joi.string().hex().length(24).required(),
            nombreLista: Joi.string().required(),
        }).validate(req.params);

        if (schema.error) {
            return res.status(400).json({ status: 400, message: schema.error.details[0].message });
        }

        const idUser = req.params.idUser;
        const nombreLista = req.params.nombreLista;

        await ListService.addToList(movie, nombreLista, idUser);

        return res.status(200).json({ status: 200, message: "Lista obtenida correctamente", data: list });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ status: 500, message: "Error interno del servidor" });
    }
}

exports.addToList = async function(req, res, next) {
    try {
        const movie = {
            _id: String(req.body._id),  // Convertir _id a cadena si es necesario
            title: req.body.title,
            release_date: req.body.release_date,
            overview: req.body.overview,
            poster_path: req.body.poster_path,
            typeFilm: req.body.typeFilm
        };

        const idUser = req.params.idUser;
        let nameList = req.params.nameList;

        // Asegurar que nameList es una cadena
        nameList = String(nameList);

        console.log('idUser:', idUser);
        console.log('nameList:', nameList);  // Verifica el valor aquí

        // Validar que nameList es uno de los campos válidos
        if (!['favoritos', 'verDespues', 'vistas'].includes(nameList)) {
            console.log('Nombre de la lista no válido:', nameList);  // Verifica por qué no es válido
            return res.status(400).json({ status: 400, message: "Nombre de la lista no válido" });
        }

        // Llamar al servicio para agregar a la lista
        await ListService.addToList(movie, nameList, idUser);

        return res.status(200).json({ status: 200, message: "Película agregada exitosamente" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ status: 500, message: "Error interno del servidor" });
    }
};
