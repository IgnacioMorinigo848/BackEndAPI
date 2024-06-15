import service from "../service/user.service"

export const getUser = async (req, res) => {
  try{
    const userId = req.body.ObjetId;
    const user = service.getUser(userId);
    return res.status(200).json({user})

  }catch(error){
    console.log(error);
    res.status(400).json({menssage:"Error looking from user."})
  }
};

export const updateUserById = async (req, res) => {
  try{
    const userId = req.body.ObjetId;
    const password = req.body.ObjetId;

    const response = service.updateUserById(userId,password);
    res.status(200).json({response,menssage:"password was update successfully."});

  }catch(error){
    console.log(error);
    res.status(400).json({menssage:"error trying to update password."})
  }
};
