import PageContainer from '../../components/layout/Container';
import Title from '../../components/layout/Title';
import AlbumsList from '../../components/ui/Albums/AlbumsList';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import ReturnButton from '../../components/ui/ReturnButton';
import { getAlbum } from '../../services/HttpApi';

function Albums() {
    const [albums, setAlbums] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const res = await getAlbum(id);
            setAlbums(res.data);
        };
        fetchData();
    }, [id]);

    return (
        <PageContainer>
            <ReturnButton />
            <Title title={'List of Albums'} />
            <AlbumsList albums={albums} />
        </PageContainer>
    );
}

export default Albums;
