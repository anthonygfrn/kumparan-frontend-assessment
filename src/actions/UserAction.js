import axios from 'axios';

export const GET_LIST_USERS = 'GET_LIST_USERS';

export const getListUsers = () => {
    console.log('2. Masuk Action');
    return (dispatch) => {
        //loading
        dispatch({
            type: GET_LIST_USERS,
            payload: {
                loading: true,
                data: false,
                errorMessage: false,
            },
        });

        //get API
        axios({
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/users/',
            timeout: 12000,
        })
            .then((response) => {
                //berhasil get api
                console.log('3. Berhasil dapet Data: ', response.data);
                dispatch({
                    type: GET_LIST_USERS,
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
                    type: GET_LIST_USERS,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: error.message,
                    },
                });
            });
    };
};
