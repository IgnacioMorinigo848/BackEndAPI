import jwt from "jsonwebtoken";
import User from "../models/User.js";
import { SECRET_JWT } from "../config.js";
import { Response } from 'express'; // Importa Response de express

export const signupHandlerService = async (user) => { // Recibe res como parámetro
    try{
        const userFound = await User.findOne({ email: user.email });
        if (userFound) throw new Error("El mail ya existe."); 
    
        // Creando un nuevo usuario
        const newUser = new User({
          name:user.name,
          lastName:user.lastName,
          email:user.email,
          password: user.password,
        }); // Agrega un punto y coma aquí
    
        // Guardando el usuario en la base de datos
        const savedUser = await newUser.save();
        console.log(savedUser);
        // Creando un token de autenticación
        const token = jwt.sign({ id: savedUser._id }, SECRET_JWT, {
          expiresIn: 86400, // 24 horas
        });
    
        return token; // Devolver solo el token
      } catch (error) {
        console.log(error);
        throw error; // Lanzar error
      }
}

export const signinHandlerService = async (user) => { // Recibe res como parámetro
    try {
        // Buscando el usuario en la base de datos
        const userFound = await User.findOne({ email: user.email });
    
        const matchPassword = await User.comparePassword(
          user.password,
          userFound.password
        );
    
        if (!matchPassword)
          throw new Error("Contraseña inválida"); // Lanzar error
    
        const token = jwt.sign({ id: userFound._id }, SECRET_JWT, {
          expiresIn: 86400, // 24 horas
        });
    
        return token; // Devolver token
      } catch (error) {
        console.log(error);
        throw error; // Lanzar error
      }
}
