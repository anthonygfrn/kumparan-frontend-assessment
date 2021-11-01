import { combineReducers } from 'redux';
import userReducer from './user';
import albumReducer from './album';
import photoReducer from './photo';
import postReducer from './post';
import commentReducer from './comment';

export default combineReducers({
    userReducer,
    albumReducer,
    photoReducer,
    postReducer,
    commentReducer,
});
