import { Router } from "express";
import { getFavorites, addFavorites, deleteFavorites,getWatchLater,addWatchLater,deleteWatchLater,getWatched,addWatched,deleteWatched } from "../controller/lists.controller.js";
const checkFields = require("../middlewares/validateFields.js");
const { check } = require("express-validator")

const router = Router();


router.get("/favorites", [check("userId").not().isEmpty(), checkFields],getFavorites);
router.post("/favorites", 
    [check("userId").not().isEmpty(),
    check("_id").not().isEmpty(),
    check("title").not().isEmpty(),
    check("release_date").not().isEmpty(),
    check("overview").not().isEmpty(),
    check("poster_path").not().isEmpty(),
    checkFields],
    addFavorites);
router.delete("/favorites",[check("userId").not().isEmpty(),
    check("_id").not().isEmpty(),
     checkFields], 
     deleteFavorites);

router.get("/watchLater", [check("userId").not().isEmpty(), checkFields],getWatchLater);
router.post("/watchLater", 
    [check("userId").not().isEmpty(),
    check("_id").not().isEmpty(),
    check("title").not().isEmpty(),
    check("release_date").not().isEmpty(),
    check("overview").not().isEmpty(),
    check("poster_path").not().isEmpty(),
    checkFields], 
    addWatchLater);
router.delete("/watchLater", [check("userId").not().isEmpty(),
    check("_id").not().isEmpty(),
     checkFields], 
     deleteWatchLater);

router.get("/watched", [check("userId").not().isEmpty(), checkFields],getWatched);
router.post("/watched", 
    [check("userId").not().isEmpty(),
    check("_id").not().isEmpty(),
    check("title").not().isEmpty(),
    check("release_date").not().isEmpty(),
    check("overview").not().isEmpty(),
    check("poster_path").not().isEmpty(),
    checkFields], 
    addWatched);
router.delete("/watched", [check("userId").not().isEmpty(),
    check("_id").not().isEmpty(),
     checkFields], 
     deleteWatched);

export default router;