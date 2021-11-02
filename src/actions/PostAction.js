import axios from 'axios';

export const GET_LIST_POSTS = 'GET_LIST_POSTS';
export const ADD_POST = 'ADD_POST';
export const DELETE_POST = 'DELETE_POST';
export const UPDATE_POST = 'UPDATE_POST';

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
            url: 'https://jsonplaceholder.typicode.com/posts/?userId=' + id,
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

export const addPost = (data) => {
    return (dispatch) => {
        dispatch({
            type: ADD_POST,
            payload: {
                loading: true,
                data: false,
                errorMessage: false,
            },
        });

        axios({
            method: 'POST',
            url: 'https://jsonplaceholder.typicode.com/posts',
            timeout: 12000,
            data: data,
        })
            .then((response) => {
                dispatch({
                    type: ADD_POST,
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false,
                    },
                });
            })
            .catch((error) => {
                dispatch({
                    type: ADD_POST,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: error.message,
                    },
                });
            });
    };
};

export const deletePost = (id) => {
    return (dispatch) => {
        dispatch({
            type: DELETE_POST,
            payload: {
                loading: true,
                data: false,
                errorMessage: false,
            },
        });

        axios({
            method: 'DELETE',
            url: 'https://jsonplaceholder.typicode.com/posts/' + id,
            timeout: 12000,
        })
            .then((response) => {
                dispatch({
                    type: DELETE_POST,
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false,
                    },
                });
            })
            .catch((error) => {
                dispatch({
                    type: DELETE_POST,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: error.message,
                    },
                });
            });
    };
};

export const updatePost = (data) => {
    return (dispatch) => {
        //loading
        dispatch({
            type: UPDATE_POST,
            payload: {
                loading: true,
                data: false,
                errorMessage: false,
            },
        });

        axios({
            method: 'PUT',
            url: 'https://jsonplaceholder.typicode.com/posts/' + data.id,
            timeout: 12000,
            data: data,
        })
            .then((response) => {
                dispatch({
                    type: UPDATE_POST,
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false,
                    },
                });
            })
            .catch((error) => {
                dispatch({
                    type: UPDATE_POST,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: error.message,
                    },
                });
            });
    };
};
