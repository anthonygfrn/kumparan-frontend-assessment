import { GET_LIST_ALBUMS } from '../../actions/AlbumAction';

const initialState = {
    getListAlbumsResult: false,
    getListAlbumsLoading: false,
    getListAlbumsError: false,
};

const albums = (state = initialState, action) => {
    switch (action.type) {
        case GET_LIST_ALBUMS:
            return {
                ...state,
                getListAlbumsResult: action.payload.data,
                getListAlbumsLoading: action.payload.loading,
                getListAlbumsError: action.payload.errorMesasge,
            };
        default:
            return state;
    }
};

export default albums;
