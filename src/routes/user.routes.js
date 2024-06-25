import { Router } from "express";
import { getUser, updatePassword,getCode,validateCode } from "../controller/user.controller.js";
const checkFields = require("../middlewares/validateFields.js");
const { check } = require("express-validator")

const router = Router();

router.get("/getUser", [check("userId").not().isEmpty(), checkFields], getUser);

router.put("/changePassword",[check("newPassword").not().isEmpty(),checkFields], updatePassword);

router.put("/validateCode" ,[check("code").not().isEmpty(),checkFields],validateCode);

router.get("/getCode",[check("email").not().isEmpty(),checkFields],getCode);
export default router;
