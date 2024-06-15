import { Router } from "express";
import { signinHandler, signupHandler } from "../controller/auth.controller.js";

const router = Router();

router.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

////////AUTENTIFICACION EN LA PAG/////////////////
router.post("/signup", signupHandler);

router.post("/signin", signinHandler);

export default router;
