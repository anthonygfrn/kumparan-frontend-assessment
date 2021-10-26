import PageContainer from '../../components/layout/Container';
import PhotosList from "../../components/PhotosList";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Photos() {
    const [photos, setPhotos] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`)
            .then((res) => {
                setPhotos(res.data);
            }, []);
    });

    return (
        <PageContainer>
            <PhotosList photos={photos} />
        </PageContainer>
    );
}

export default Photos;
