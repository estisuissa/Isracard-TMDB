import {
    ADD_FAVORITE,
    REMOVE_FAVORITE
} from '../actions/actionTypes';

const initialState = {
    favorites: []
}

const reducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case ADD_FAVORITE:
            return {
                ...state,
                favorites: state.favorites.concat(payload)
            };
        case REMOVE_FAVORITE:
            return {
                ...state,
                favorites: state.favorites.filter(f => payload !== f.id)
            };
        default: return state;
    }
}

export default reducer;