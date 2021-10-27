import PageContainer from '../../components/layout/Container';
import Title from '../../components/layout/Title';
import PhotosList from '../../components/ui/Photos/PhotosList';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getPhotos } from '../../services/HttpApi';

function Photos() {
    const [photos, setPhotos] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const res = await getPhotos(id);
            setPhotos(res.data);
        };
        fetchData();
    }, [id]);

    return (
        <PageContainer>
            <Title title={'List of Photos'} />
            <PhotosList photos={photos} />
        </PageContainer>
    );
}

export default Photos;
