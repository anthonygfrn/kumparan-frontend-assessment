import axios from 'axios';

export const GET_LIST_COMMENTS = 'GET_LIST_COMMENTS';
export const ADD_COMMENT = 'ADD_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const DETAIL_COMMENT = 'DETAIL_COMMENT';
export const UPDATE_COMMENT = 'UPDATE_COMMENT';

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

export const addComment = (data) => {
    return (dispatch) => {
        dispatch({
            type: ADD_COMMENT,
            payload: {
                loading: true,
                data: false,
                errorMessage: false,
            },
        });

        axios({
            method: 'POST',
            url: 'https://jsonplaceholder.typicode.com/comments',
            timeout: 12000,
            data: data,
        })
            .then((response) => {
                dispatch({
                    type: ADD_COMMENT,
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false,
                    },
                });
            })
            .catch((error) => {
                dispatch({
                    type: ADD_COMMENT,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: error.message,
                    },
                });
            });
    };
};

export const deleteComment = (id) => {
    return (dispatch) => {
        dispatch({
            type: DELETE_COMMENT,
            payload: {
                loading: true,
                data: false,
                errorMessage: false,
            },
        });

        axios({
            method: 'DELETE',
            url: 'https://jsonplaceholder.typicode.com/comments/' + id,
            timeout: 12000,
        })
            .then((response) => {
                dispatch({
                    type: DELETE_COMMENT,
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false,
                    },
                });
            })
            .catch((error) => {
                dispatch({
                    type: DELETE_COMMENT,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: error.message,
                    },
                });
            });
    };
};

export const detailComment = (data) => {
    return (dispatch) => {
        dispatch({
            type: DETAIL_COMMENT,
            payload: {
                data: data,
            },
        });
    };
};

export const updateComment = (data) => {
    return (dispatch) => {
        dispatch({
            type: UPDATE_COMMENT,
            payload: {
                loading: true,
                data: false,
                errorMessage: false,
            },
        });

        axios({
            method: 'PUT',
            url: 'https://jsonplaceholder.typicode.com/comments/' + data.id,
            timeout: 12000,
            data: data,
        })
            .then((response) => {
                dispatch({
                    type: UPDATE_COMMENT,
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false,
                    },
                });
            })
            .catch((error) => {
                dispatch({
                    type: UPDATE_COMMENT,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: error.message,
                    },
                });
            });
    };
};
