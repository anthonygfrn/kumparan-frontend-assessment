import { GET_LIST_COMMENTS } from '../../actions/CommentAction';

const initialState = {
    getListCommentsResult: false,
    getListCommentsLoading: false,
    getListCommentsError: false,
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
        default:
            return state;
    }
};

export default comments;
