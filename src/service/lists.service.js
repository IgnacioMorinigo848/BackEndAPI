import User from "../models/User.js";

export const getFavoritesService = async (userId) => {
    try {
        const user = await User.findOne({ _id: userId }).populate("favorites");
        return user ? user.favorites : [];
    } catch (error) {
        console.log(error);
        throw new Error("Error trying to get favorites by server.");
    }
}

export const addFavoritesService = async (userId, movie) => {
    try {
        const user = await User.findById(userId);
        if (!user) throw new Error("User not found.");

        user.favorites.push(movie);
        const save = await user.save();
        return save;
    } catch (error) {
        console.error(error);
        throw new Error("Error trying to add favorites.");
    }
}

export const deleteFavoritesService = async (userId, movieId) => {
    try {
        const user = await User.findById(userId);
        if (!user) throw new Error("User not found.");

        user.favorites = user.favorites.filter(fav => fav._id !== movieId);
        const save = await user.save();
        return save;
    } catch (error) {
        console.error(error);
        throw new Error("Error removing favorites by server.");
    }
}

export const getWatchLaterService = async (userId) => {
    try {
        const user = await User.findOne({ _id: userId }).populate("watchLater");
        return user ? user.watchLater : [];
    } catch (error) {
        console.log(error);
        throw new Error("Error trying to get watchLater by server.");
    }
}

export const addWatchLaterService = async (userId, movie) => {
    try {
        const user = await User.findById(userId);
        if (!user) throw new Error("User not found.");

        user.watchLater.push(movie);
        const save = await user.save();
        return save;
    } catch (error) {
        console.error(error);
        throw new Error("Error trying to add watchLater.");
    }
}

export const deleteWatchLaterService = async (userId, movieId) => {
    try {
        const user = await User.findById(userId);
        if (!user) throw new Error("User not found.");

        user.watchLater = user.watchLater.filter(movie => movie._id !== movieId);
        const save = await user.save();
        return save;
    } catch (error) {
        console.error(error);
        throw new Error("Error removing watchLater by server.");
    }
}

export const getWatchedService = async (userId) => {
    try {
        const user = await User.findOne({ _id: userId }).populate("watched");
        return user ? user.watched : [];
    } catch (error) {
        console.log(error);
        throw new Error("Error trying to get watched by server.");
    }
}

export const addWatchedService = async (userId, movie) => {
    try {
        const user = await User.findById(userId);
        if (!user) throw new Error("User not found.");

        user.watched.push(movie);
        const save = await user.save();
        return save;
    } catch (error) {
        console.error(error);
        throw new Error("Error trying to add watched.");
    }
}

export const deleteWatchedService = async (userId, movieId) => {
    try {
        const user = await User.findById(userId);
        if (!user) throw new Error("User not found.");

        user.watched = user.watched.filter(movie => movie._id !== movieId);
        const save = await user.save();
        return save;
    } catch (error) {
        console.error(error);
        throw new Error("Error removing watched by server.");
    }
}
