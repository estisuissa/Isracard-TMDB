import { combineReducers } from 'redux';
import favorites from './favorites';
import user from './user'

const rootReducers = combineReducers({
    user,
    favorites,
})

export default rootReducers;