import User from "../models/User.js";
import bcrypt from 'bcryptjs';

export const getUserService = async (userId) => {
    try {
        const user = await User.findById(userId);
        if (!user) {
          throw new Error("User not found");
        }
        return user;
      } catch (error) {
        throw new Error(error.message);
      }
}

export const updateUserService = async (newPassword,email) => {
    try{
      const user = await User.findOne({ email: email });
    if (!user) {
      throw new Error ("User not found" );
    }

    // Actualiza la contraseña del usuario
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;

    await user.save();
    return user;
    }catch(error){
      throw new Error(error.message)
    }
}

export const getUserByEmailService = async (email) => {
  try {
    // Utilizar findOne en lugar de findById para buscar por email
    const user = await User.findOne({ email: email });
    if (!user) {
      throw new Error("User not found");
    }
    return user; // O retorna lo que necesites, como true si solo quieres verificar la existencia
  } catch (error) {
    throw new Error(error.message);
  }
}


