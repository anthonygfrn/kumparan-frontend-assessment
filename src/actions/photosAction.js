import { getPhotos } from '../services/HttpApi';

export const GET_PHOTOS_LIST = 'GET_PHOTOS_LIST';

export const getPhotosList = (dispatch, props) => {
    dispatch({
        type: GET_PHOTOS_LIST,
        payload: {
            data: false,
            errorMessage: false,
        },
    });

    getPhotos(props)
        .then((response) => {
            dispatch({
                type: GET_PHOTOS_LIST,
                payload: {
                    data: response.data,
                    errorMessage: false,
                },
            });
        })
        .catch((error) => {
            dispatch({
                type: GET_PHOTOS_LIST,
                payload: {
                    data: false,
                    errorMessage: error.message,
                },
            });
        });
};
