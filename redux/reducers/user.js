import {
    USER_SIGNIN
} from '../actions/actionTypes';

const initialState = {
    user: null
}

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case USER_SIGNIN:
            return {
                ...state,
                user: payload
            };
        default: return state;
    }
}

export default reducer;