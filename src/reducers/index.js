import { combineReducers } from 'redux';
import userReducer from './user';
import albumReducer from './album';
import photoReducer from './photo';

export default combineReducers({
    userReducer,
    albumReducer,
    photoReducer,
});
