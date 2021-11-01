import axios from 'axios';

// Fetch User

export const getUser = async () => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/users`);
    return response;
};

export const getAlbum = async (props) => {
    const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/albums?userId=${props}`
    );
    return response;
};

export const getPhotos = async (props) => {
    const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/photos?albumId=${props}`
    );
    return response;
};

export const getPosts = async (props) => {
    const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/posts?userId=${props}`
    );
    return response;
};

export const getComments = async (props) => {
    const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/comments?postId=${props}`
    );
    return response;
};
