import { signupHandlerService, signinHandlerService } from '../service/auth.service.js';

export const signupHandler = async (req, res) => {
  try {
    const token = await signupHandlerService(req.body);
    res.status(200).json({ token });
  } catch (error) {
    console.log(error.message)
    res.status(400).json(error.message);
  }
};

export const signinHandler = async (req, res) => {
  try {
    const token = await signinHandlerService(req.body);
    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(401).json(error.message);
  }
};
