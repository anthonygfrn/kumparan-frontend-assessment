import { GET_PHOTOS_LIST } from '../../actions/photosAction';

const PhotosReducer = (state, action) => {
    const { type } = action;
    switch (type) {
        case GET_PHOTOS_LIST:
            return {
                ...state,
                getPhotosResult: action.payload.data,
                getPhotosError: action.payload.errorMessage,
            };
        default:
            return state;
    }
};

export default PhotosReducer;
