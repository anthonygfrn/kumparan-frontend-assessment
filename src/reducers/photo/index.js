import { GET_LIST_PHOTOS } from '../../actions/PhotoAction';

const initialState = {
    getListPhotosResult: false,
    getListPhotosLoading: false,
    getListPhotosError: false,
};

const photos = (state = initialState, action) => {
    switch (action.type) {
        case GET_LIST_PHOTOS:
            return {
                ...state,
                getListPhotosResult: action.payload.data,
                getListPhotosLoading: action.payload.loading,
                getListPhotosError: action.payload.errorMesasge,
            };
        default:
            return state;
    }
};

export default photos;
