import { getAlbum } from '../services/HttpApi';

export const GET_ALBUMS_LIST = 'GET_ALBUMS_LIST';

export const getAlbumsList = (dispatch, props) => {
    dispatch({
        type: GET_ALBUMS_LIST,
        payload: {
            data: false,
            errorMessage: false,
        },
    });

    getAlbum(props)
        .then((response) => {
            dispatch({
                type: GET_ALBUMS_LIST,
                payload: {
                    data: response.data,
                    errorMessage: false,
                },
            });
        })
        .catch((error) => {
            dispatch({
                type: GET_ALBUMS_LIST,
                payload: {
                    data: false,
                    errorMessage: error.message,
                },
            });
        });
};
