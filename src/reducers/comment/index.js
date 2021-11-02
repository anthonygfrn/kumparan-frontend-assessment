import {
    GET_LIST_COMMENTS,
    ADD_COMMENT,
    DELETE_COMMENT,
    DETAIL_COMMENT,
    UPDATE_COMMENT,
} from '../../actions/CommentAction';

const initialState = {
    getListCommentsResult: false,
    getListCommentsLoading: false,
    getListCommentsError: false,

    addCommentResult: false,
    addCommentLoading: false,
    addCommentError: false,

    deleteCommentResult: false,
    deleteCommentLoading: false,
    deleteCommentError: false,

    detailCommentResult: false,

    updateCommentResult: false,
    updateCommentLoading: false,
    updateCOmmentError: false,
};

const comments = (state = initialState, action) => {
    switch (action.type) {
        case GET_LIST_COMMENTS:
            return {
                ...state,
                getListCommentsResult: action.payload.data,
                getListCommentsLoading: action.payload.loading,
                getListCommentsError: action.payload.errorMesasge,
            };
        case ADD_COMMENT:
            return {
                ...state,
                addCommentResult: action.payload.data,
                addCommentLoading: action.payload.loading,
                addCommentError: action.payload.errorMesasge,
            };
        case DELETE_COMMENT:
            return {
                ...state,
                deleteCommentResult: action.payload.data,
                deleteCommentLoading: action.payload.loading,
                deleteCommentError: action.payload.errorMesasge,
            };
        case DETAIL_COMMENT:
            return {
                ...state,
                detailCommentResult: action.payload.data,
            };
        case UPDATE_COMMENT:
            return {
                ...state,
                updateCommentResult: action.payload.data,
                updateCommentLoading: action.payload.loading,
                updateCommentError: action.payload.errorMesasge,
            };
        default:
            return state;
    }
};

export default comments;
