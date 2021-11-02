import axios from 'axios';

export const GET_LIST_USERS = 'GET_LIST_USERS';

export const getListUsers = () => {
    return (dispatch) => {
        dispatch({
            type: GET_LIST_USERS,
            payload: {
                loading: true,
                data: false,
                errorMessage: false,
            },
        });

        axios({
            method: 'GET',
            url: 'http://localhost:3000/users',
            timeout: 12000,
        })
            .then((response) => {
                dispatch({
                    type: GET_LIST_USERS,
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false,
                    },
                });
            })
            .catch((error) => {
                dispatch({
                    type: GET_LIST_USERS,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: error.message,
                    },
                });
            });
    };
};
