import jwt from "jsonwebtoken";
import User from "../models/User.js";
import { SECRET_JWT } from "../config.js";

export const signupHandlerService = async (user) => { 
  try{
      const userFound = await User.findOne({ email: user.email });
      if (userFound) throw new Error("El mail ya existe."); 
  
      // Creando un nuevo usuario
      const newUser = new User({
        name:user.name,
        lastName:user.lastName,
        email:user.email,
        password: user.password,
      }); 
  
      // Guardando el usuario en la base de datos
      const savedUser = await newUser.save();
      // Creando un token de autenticación
      const token = jwt.sign({ id: savedUser._id }, SECRET_JWT, {
        expiresIn: 86400, // 24 horas
      });
  
      return token; 
    } catch (error) {
      throw Error(error.message);
    }
}


export const signinHandlerService = async (user) => {
    try {
        // Buscando el usuario en la base de datos
        const userFound = await User.findOne({ email: user.email });
    
        const matchPassword = await User.comparePassword(
          user.password,
          userFound.password
        );
    
        if (!matchPassword)
          throw new Error("Contraseña inválida"); 
    
        const token = jwt.sign({ id: userFound._id }, SECRET_JWT, {
          expiresIn: 86400, // 24 horas
        });
    
        return token; 
      } catch (error) {
        throw Error(error.message);
      }
}
