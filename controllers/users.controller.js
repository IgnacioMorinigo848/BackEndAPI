const UserService = require('../services/user.service');
const bcrypt = require('bcryptjs'); // Asegúrate de requerir bcrypt aquí

exports.createUser = async function (req, res, next) {
    try {
        const userData = {
            name: req.body.name,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
            favoritos: req.body.favoritos || [],
            verDespues: req.body.verDespues || [],
            vistas: req.body.vistas || []
        };

        const token = await UserService.createUser(userData); // Aquí pasamos los datos del usuario
        return res.status(201).json({ token, message: "Usuario creado exitosamente" });
    } catch (error) {
        console.error(error);
        return res.status(400).json({ status: 400, message: "Error al crear el usuario" });
    }
};

exports.validateMail = async function (req, res, next) {
    try {
        const userData = {
            email: req.body.email
        };

        const isMailValid = await UserService.validateMail(userData);
        return res.status(200).json({ status: 200, isMailValid, message: "Correo electrónico validado exitosamente" });
    } catch (error) {
        console.error(error);
        return res.status(400).json({ status: 400, message: "Error al validar el correo electrónico" });
    }
}

exports.loginUser = async function (req, res, next) {
    try {
        const userData = {
            email: req.body.email,
            password: req.body.password
        };

        const loginUser = await UserService.loginUser(userData);
        if (!loginUser) {
            return res.status(400).json({ message: "Error en la contraseña" });
        } else {
            return res.status(200).json({ loginUser, message: "Inicio de sesión exitoso" });
        }
    } catch (error) {
        console.error(error);
        return res.status(400).json({ status: 400, message: "Usuario o contraseña inválidos" });
    }
}
