// routes/userRoutes.js
import nodemailer from 'nodemailer';
import jwt from 'jsonwebtoken';
import { getUserService, getUserByEmailService, updateUserService} from "../service/user.service";

const secretKey = "yourSecretKey"; // Usa una clave secreta segura para firmar el token

// Configura el transporte de correo electrónico
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "ignaciomorinigo850@gmail.com",
    pass: "pyci vkhe cdbc dfrv",
  },
});

// Función para enviar el correo electrónico
const sendEmail = (to, subject, text) => {
  const mailOptions = {
    from: "ignaciomorinigo850@gmail.com",
    to: to,
    subject: subject,
    text: text,
  };

  return transporter.sendMail(mailOptions);
};

export const getUser = async (req, res) => {
  try {
    const { userId } = req.body; 
    const usuario = await getUserService(userId);
    return res.status(200).json({ usuario });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getCode = async (req, res) => {
  try {
    const { email } = req.body;
    const response = await getUserByEmailService(email);

    if (response) {
      const code = Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000; 

      // Crear el token con el código
      const token = jwt.sign({ email, code }, secretKey, { expiresIn: '1h' });

      // Enviar el correo electrónico con el código
      await sendEmail(email, 'Password Reset Code', `Your password reset code is: ${code}`);

      res.status(200).json({ message: "Code generated and sent via email successfully.", token });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const validateCode = (req, res) => {
  try {
    const { code } = req.body;
    const token = req.headers['x-access-token'];

    if (!token) {
      return res.status(400).json({ message: "No token provided" });
    }

    let decoded;

    try {
      decoded = jwt.verify(token, secretKey);
    } catch (error) {
      return res.status(400).json({ message: "Invalid token" });
    }

    const { code: tokenCode } = decoded;

    if (parseInt(code, 10) !== tokenCode) {
      return res.status(400).json({ message: "Invalid code" });
    } else {
      return res.status(200).json({ token });
    }
  } catch (error) {
    res.status(400).json({ message: "Error occurred" });
  }
};

export const updatePassword = async (req, res) => {
  try {
    const { newPassword } = req.body;
    const token = req.headers['x-access-token'];

    if (!token) {
      return res.status(400).json({ message: "No token provided" });
    }

    let decoded;

    try {
      decoded = jwt.verify(token, secretKey);
    } catch (error) {
      return res.status(400).json({ message: "Invalid token" });
    }

    const { email: tokenEmail } = decoded;
    const user = await updateUserService(newPassword,tokenEmail);
    res.status(200).json({ user, message: "Password reset successfully" });
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      res.status(400).json({ message: "Token expired" });
    } else if (error.name === 'JsonWebTokenError') {
      res.status(400).json({ message: "Invalid token" });
    } else {
      res.status(400).json({ message: error.message });
    }
  }
};