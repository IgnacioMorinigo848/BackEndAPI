import { Router } from "express";
import { getUser, updateUserById} from "../controller/user.controller.js";

const router = Router();

router.get("/getUser", getUser);

router.put("/updateUser", updateUserById);

export default router;