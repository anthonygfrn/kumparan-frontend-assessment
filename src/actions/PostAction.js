import axios from 'axios';

export const GET_LIST_POSTS = 'GET_LIST_POSTS';

export const getListPosts = (id) => {
    console.log('2. Masuk Action');
    return (dispatch) => {
        //loading
        dispatch({
            type: GET_LIST_POSTS,
            payload: {
                loading: true,
                data: false,
                errorMessage: false,
            },
        });

        //get API
        axios({
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/posts?userId=' + id,
            timeout: 12000,
        })
            .then((response) => {
                //berhasil get api
                console.log('3. Berhasil dapet Data: ', response.data);
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
                // gagal get api
                console.log('3. Gagal dapat Data: ', error.message);
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
