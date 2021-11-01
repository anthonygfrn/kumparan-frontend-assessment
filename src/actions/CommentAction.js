import axios from 'axios';

export const GET_LIST_COMMENTS = 'GET_LIST_COMMENTS';

export const getListComments = (id) => {
    return (dispatch) => {
        dispatch({
            type: GET_LIST_COMMENTS,
            payload: {
                loading: true,
                data: false,
                errorMessage: false,
            },
        });

        axios({
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/comments?postId=' + id,
            timeout: 12000,
        })
            .then((response) => {
                dispatch({
                    type: GET_LIST_COMMENTS,
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false,
                    },
                });
            })
            .catch((error) => {
                dispatch({
                    type: GET_LIST_COMMENTS,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: error.message,
                    },
                });
            });
    };
};
