import { 
    getFavoritesService, addFavoritesService, deleteFavoritesService,
    getWatchLaterService, addWatchLaterService, deleteWatchLaterService,
    getWatchedService, addWatchedService, deleteWatchedService
} from "../service/lists.service";

export const getFavorites = async (req, res) => {
    try {
        const {userId} = req.body; 
        const favorites = await getFavoritesService(userId);
        return res.status(200).json({ favorites });
    } catch (error) {
        if (error.message === "User not found.") return res.status(404).json(error.message);
        res.status(500).json(error.message);
    }
};

export const addFavorites = async (req, res) => {
    try {
        const userId = req.body.userId;
        const movie = {
            _id: req.body._id ,
            title: req.body.title,
            release_date: req.body.release_date,
            overview: req.body.overview,
            poster_path:req.body.poster_path
        }

        const response = await addFavoritesService(userId, movie);
        return res.status(200).json({ response });
    } catch (error) {
        res.status(400).json(error.message);
    }
};

export const deleteFavorites = async (req, res) => {
    try {
       const userId = req.body.userId;
       const movieId = req.body._id;

       const response = await deleteFavoritesService(userId, movieId);
       return res.status(200).json({ response });

    } catch (error) {
        res.status(400).json(error.message);
    }

};

export const getWatchLater = async (req, res) => {
    try {
        const userId = req.body.userId;
        const watchLater = await getWatchLaterService(userId);
        return res.status(200).json({ watchLater });
    } catch (error) {
        if (error.message === "User not found.") return res.status(404).json(error.message);
        res.status(500).json(error.message);
    }
};

export const addWatchLater = async (req, res) => {
    try {
        const userId = req.body.userId;
        const movie = {
            _id: req.body._id ,
            title: req.body.title,
            release_date: req.body.release_date,
            overview: req.body.overview,
            poster_path:req.body.poster_path
        }


        const response = await addWatchLaterService(userId, movie);
        return res.status(200).json({ response });
    } catch (error) {
        res.status(400).json(error.message);
    }
};

export const deleteWatchLater = async (req, res) => {
    try {
        const userId = req.body.userId;
        const movieId = req.body._id;
 
        const response = await deleteWatchLaterService(userId, movieId);
        return res.status(200).json({ response });
 
     } catch (error) {
         res.status(500).json(error.message);
     }
 
};

export const getWatched = async (req, res) => {
    try {
        const {userId} = req.body;
        const watched = await getWatchedService(userId);
        return res.status(200).json({ watched });
    } catch (error) {
        if (error.message === "User not found.") return res.status(404).json(error.message);
        res.status(500).json(error.message);
    }
};

export const addWatched = async (req, res) => {
    try {
        const userId = req.body.userId;
        const movie = {
            _id: req.body._id ,
            title: req.body.title,
            release_date: req.body.release_date,
            overview: req.body.overview,
            poster_path:req.body.poster_path
        }


        const response = await addWatchedService(userId, movie);
        return res.status(200).json({ response });
    } catch (error) {
        res.status(500).json(error.message);
    }
};

export const deleteWatched = async (req, res) => {
    try {
        const userId = req.body.userId;
        const movieId = req.body._id;
 
        const response = await deleteWatchedService(userId, movieId);
        return res.status(200).json({ response });
 
     } catch (error) {
         res.status(500).json(error.message);
     }
};
