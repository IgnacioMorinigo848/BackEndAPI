import { Router } from "express";
import { signinHandler, signupHandler } from "../controller/auth.controller.js";
const checkFields = require("../middlewares/validateFields.js");
const { check } = require("express-validator");

const router = Router();

router.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

////////AUTENTIFICACION EN LA PAG/////////////////
router.post(
  "/signup",
  [
    check("name").not().isEmpty(),
    check("lastName").not().isEmpty(),
    check("email").not().isEmpty(),
    check("password").not().isEmpty(),
    checkFields,
  ],
  signupHandler
);

router.post(
  "/signin",
  [
    check("email").not().isEmpty(),
    check("password").not().isEmpty(),
    checkFields,
  ],
  signinHandler
);

export default router;
