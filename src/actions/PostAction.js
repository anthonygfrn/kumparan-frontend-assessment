import axios from 'axios';

export const GET_LIST_POSTS = 'GET_LIST_POSTS';

export const getListPosts = (id) => {
    return (dispatch) => {
        dispatch({
            type: GET_LIST_POSTS,
            payload: {
                loading: true,
                data: false,
                errorMessage: false,
            },
        });

        axios({
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/posts?userId=' + id,
            timeout: 12000,
        })
            .then((response) => {
                dispatch({
                    type: GET_LIST_POSTS,
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false,
                    },
                });
            })
            .catch((error) => {
                dispatch({
                    type: GET_LIST_POSTS,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: error.message,
                    },
                });
            });
    };
};
