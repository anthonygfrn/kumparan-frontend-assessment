import { GET_LIST_USERS } from '../../actions/UserAction';

const initialState = {
    getListUsersResult: false,
    getListUsersLoading: false,
    getListUsersError: false,
};

const users = (state = initialState, action) => {
    switch (action.type) {
        case GET_LIST_USERS:
            return {
                ...state,
                getListUsersResult: action.payload.data,
                getListUsersLoading: action.payload.loading,
                getListUsersError: action.payload.errorMesasge,
            };
        default:
            return state;
    }
};

export default users;
