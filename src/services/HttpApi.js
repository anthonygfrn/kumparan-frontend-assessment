import axios from 'axios'

export const getUser = () => {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
        return res.data
    }, [])
}

// function axiosPhotos() => {
//     axios
//                 .get(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`)
//                 .then((res) => {
//                     return res
//                 });

// }
