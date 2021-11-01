import { GET_LIST_POSTS } from '../../actions/PostAction';

const initialState = {
    getListPostsResult: false,
    getListPostsLoading: false,
    getListPostsError: false,
};

const albums = (state = initialState, action) => {
    switch (action.type) {
        case GET_LIST_POSTS:
            console.log('4. Masuk reducer', action);
            return {
                ...state,
                getListPostsResult: action.payload.data,
                getListPostsLoading: action.payload.loading,
                getListPostsError: action.payload.errorMesasge,
            };
        default:
            return state;
    }
};

export default albums;
