import {
    ADD_FAVORITE,
    REMOVE_FAVORITE
} from './actionTypes';

export const addFavorite = (movie) => {
    return {
        type: ADD_FAVORITE,
        payload: movie
    };
};

export const removeFavorite = (id) => {
    return {
        type: REMOVE_FAVORITE,
        payload: id
    };
};