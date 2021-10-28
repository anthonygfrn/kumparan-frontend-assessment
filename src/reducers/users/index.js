import { GET_USERS_LIST } from '../../actions/usersAction';

const usersReducer = (state, action) => {
    const { type } = action;
    switch (type) {
        case GET_USERS_LIST:
            return {
                ...state,
                getUsersResult: action.payload.data,
            };
        default:
            return state;
    }
};

export default usersReducer;
