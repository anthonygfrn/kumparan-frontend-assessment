import {
    ADD_POST,
    GET_LIST_POSTS,
    DELETE_POST,
    UPDATE_POST,
} from '../../actions/PostAction';

const initialState = {
    getListPostsResult: false,
    getListPostsLoading: false,
    getListPostsError: false,

    addPostResult: false,
    addPostLoading: false,
    addPostError: false,

    deletePostResult: false,
    deletePostLoading: false,
    deletePostError: false,

    updatePostResult: false,
    updatePostLoading: false,
    updatePostError: false,
};

const post = (state = initialState, action) => {
    switch (action.type) {
        case GET_LIST_POSTS:
            return {
                ...state,
                getListPostsResult: action.payload.data,
                getListPostsLoading: action.payload.loading,
                getListPostsError: action.payload.errorMesasge,
            };
        case ADD_POST:
            return {
                ...state,
                addPostResult: action.payload.data,
                addPostLoading: action.payload.loading,
                addPostError: action.payload.errorMesasge,
            };
        case DELETE_POST:
            return {
                ...state,
                deletePostResult: action.payload.data,
                deletePostLoading: action.payload.loading,
                deletePostError: action.payload.errorMesasge,
            };
        case UPDATE_POST:
            return {
                ...state,
                updatePostResult: action.payload.data,
                updatePostLoading: action.payload.loading,
                updatePostError: action.payload.errorMesasge,
            };

        default:
            return state;
    }
};

export default post;
