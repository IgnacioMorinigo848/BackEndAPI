import { Router } from "express";
import { getFavorites, addFavorites, deleteFavorites,getWatchLater,addWatchLater,deleteWatchLater,getWatched,addWatched,deleteWatched } from "../controller/lists.controller.js";

const router = Router();


router.get("/favorites/get", getFavorites);
router.post("/favorites/add", addFavorites);
router.delete("/favorites/delete", deleteFavorites);

router.get("/watchLater/get", getWatchLater);
router.post("/watchLater/add", addWatchLater);
router.delete("/watchLater/delete", deleteWatchLater);

router.get("/watched/get", getWatched);
router.post("/watched/add", addWatched);
router.delete("/watched/delete", deleteWatched);

export default router;