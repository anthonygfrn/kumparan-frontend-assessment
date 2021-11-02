import axios from 'axios';

export const GET_LIST_ALBUMS = 'GET_LIST_ALBUMS';

export const getListAlbums = (id) => {
    return (dispatch) => {
        dispatch({
            type: GET_LIST_ALBUMS,
            payload: {
                loading: true,
                data: false,
                errorMessage: false,
            },
        });

        axios({
            method: 'GET',
            url: 'http://localhost:3000/albums?userId=' + id,
            timeout: 12000,
        })
            .then((response) => {
                dispatch({
                    type: GET_LIST_ALBUMS,
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false,
                    },
                });
            })
            .catch((error) => {
                dispatch({
                    type: GET_LIST_ALBUMS,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: error.message,
                    },
                });
            });
    };
};
