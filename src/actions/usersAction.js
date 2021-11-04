import { getUser } from '../services/HttpApi';

export const GET_USERS_LIST = 'GET_USERS_LIST';

export const getUsersList = (dispatch) => {
    dispatch({
        type: GET_USERS_LIST,
        payload: {
            data: false,
            errorMessage: false,
        },
    });

    getUser()
        .then((response) => {
            dispatch({
                type: GET_USERS_LIST,
                payload: {
                    data: response.data,
                    errorMessage: false,
                },
            });
        })
        .catch((error) => {
            dispatch({
                type: GET_USERS_LIST,
                payload: {
                    data: false,
                    errorMessage: error.message,
                },
            });
        });
};
