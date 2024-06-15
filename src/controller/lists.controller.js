import { 
    getFavoritesService, addFavoritesService, deleteFavoritesService,
    getWatchLaterService, addWatchLaterService, deleteWatchLaterService,
    getWatchedService, addWatchedService, deleteWatchedService
} from "../service/lists.service";

export const getFavorites = async (req, res) => {
    try {
        const userId = req.body.userId; // Cambiado de ObjetId a userId
        const favorites = await getFavoritesService(userId);
        return res.status(200).json({ favorites });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error retrieving favorites" });
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
        console.error(error);
        res.status(500).json({ message: "Error trying to add favorites" });
    }
};

export const deleteFavorites = async (req, res) => {
    try {
       const userId = req.body.userId;
       const movieId = req.body._id;

       const response = await deleteFavoritesService(userId, movieId);
       return res.status(200).json({ response });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error removing film from favorites" });
    }

};

export const getWatchLater = async (req, res) => {
    try {
        const userId = req.body.userId;
        const watchLater = await getWatchLaterService(userId);
        return res.status(200).json({ watchLater });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error retrieving watchLater" });
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
        console.error(error);
        res.status(500).json({ message: "Error trying to add watchLater" });
    }
};

export const deleteWatchLater = async (req, res) => {
    try {
        const userId = req.body.userId;
        const movieId = req.body._id;
 
        const response = await deleteWatchLaterService(userId, movieId);
        return res.status(200).json({ response });
 
     } catch (error) {
         console.error(error);
         res.status(500).json({ message: "Error removing film from watchLater" });
     }
 
};

export const getWatched = async (req, res) => {
    try {
        const userId = req.body.userId;
        const watched = await getWatchedService(userId);
        return res.status(200).json({ watched });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error retrieving watched" });
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
        console.error(error);
        res.status(500).json({ message: "Error trying to add watched" });
    }
};

export const deleteWatched = async (req, res) => {
    try {
        const userId = req.body.userId;
        const movieId = req.body._id;
 
        const response = await deleteWatchedService(userId, movieId);
        return res.status(200).json({ response });
 
     } catch (error) {
         console.error(error);
         res.status(500).json({ message: "Error removing film from watched" });
     }
};
