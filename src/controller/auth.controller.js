import { signupHandlerService, signinHandlerService } from '../service/auth.service.js';

export const signupHandler = async (req, res) => {
  try {
    const token = await signupHandlerService(req.body);
    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al registrar usuario" });
  }
};

export const signinHandler = async (req, res) => {
  try {
    const token = await signinHandlerService(req.body);
    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: "Credenciales inválidas" });
  }
};
