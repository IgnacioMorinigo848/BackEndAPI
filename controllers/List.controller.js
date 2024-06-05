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

        await ListService.addToList(movie, nameList, req.params.idUser);

        return res.status(200).json({ status: 200, message: "Lista obtenida correctamente", data: list });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ status: 500, message: "Error interno del servidor" });
    }
}

exports.addToList = async function(req, res, next) {
    try {
        const movie = {
            _id: req._id,
            title: req.body.title,
            release_date: req.body.release_date,
            overview:  req.body.overview,
            poster_path:  req.body.poster_path,
            typeFilm:  req.body.typeFilm
        }

        const idUser = req.params.idUser;
        const nameList = req.params.nameList;

     

        await ListService.addToList(movie, nameList, idUser);

        return res.status(200).json({ status: 200, message: "Película agregada exitosamente" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ status: 500, message: "Error interno del servidor" });
    }
}
