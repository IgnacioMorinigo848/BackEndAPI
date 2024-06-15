import User from "../models/User.js";

export const getUser = async (userId) => {
    try {
        const user = await User.findById(userId);
        if (!user) {
          res.status(404).json({ message: "User not found" });
        }
        return user;
      } catch (error) {
        console.error(error); 
        throw new Error( "Error retrieving user");
      }
}

export const updateUserById = async (userId,password) => {
    try{
        const updateUser = await User.findByIdAndUpdate(userId,  {password:password}, {
        new: true,
        }
        );
        const savedUser = await updateUser.save();
        return savedUser;
    }catch(error){
      throw new Error("Error trying update password.")
    }
}