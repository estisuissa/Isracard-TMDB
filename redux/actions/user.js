import {
    USER_SIGNIN
} from './actionTypes';

export const setUser = (user) => {
    return {
        type: USER_SIGNIN,
        payload: user
    };
};