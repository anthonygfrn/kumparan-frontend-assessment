import { GET_ALBUMS_LIST } from '../../actions/albumsAction';

const AlbumsReducer = (state, action) => {
    const { type } = action;
    switch (type) {
        case GET_ALBUMS_LIST:
            return {
                ...state,
                getAlbumsResult: action.payload.data,
            };
        default:
            return state;
    }
};

export default AlbumsReducer;
