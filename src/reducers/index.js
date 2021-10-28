import usersReducer from './users';
import albumsReducer from './albums';
import photosReducer from './photos';

const initialState = {
    getUsersResult: false,
    getAlbumsResult: false,
    getPhotosResult: false,
};

const combineReducers = (reducers) => {
    return (state, action) => {
        return Object.keys(reducers).reduce((acc, prop) => {
            return {
                ...acc,
                ...reducers[prop]({ [prop]: acc[prop] }, action),
            };
        }, state);
    };
};

const appReducers = combineReducers({
    usersReducer,
    albumsReducer,
    photosReducer,
});

export { initialState, combineReducers, appReducers };
