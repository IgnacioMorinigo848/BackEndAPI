const User = require('../models/User.model');

exports.addToList = async function(movieData, nameList, userId) {
    try {
       
      
        const user = await User.findByIdAndUpdate(
            userId,
            { $push: { [nameList]: movieData } },
            { new: true, useFindAndModify: false }
        );

     
        if (!user) {
            throw new Error("Usuario no encontrado");
        }

      
        return true;
    } catch (error) {
        console.error("Error al agregar a la lista:", error);
        throw error;
    }
};
