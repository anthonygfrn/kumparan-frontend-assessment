import PageContainer from '../../components/layout/Container';
import Title from '../../components/layout/Title';
import AlbumsList from '../../components/ui/Albums/AlbumsList';
import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import ReturnButton from '../../components/layout/ReturnButton';
import { useAppState } from '../../context/appState';
import { getAlbumsList } from '../../actions/albumsAction';

function Albums() {
    const { id } = useParams();
    const [state, dispatch] = useAppState();
    const { getAlbumsResult } = state;

    useEffect(() => {
        getAlbumsList(dispatch, id);
    }, [dispatch, id]);

    return (
        <PageContainer>
            <ReturnButton />
            <Title title={'List of Albums'} />
            {getAlbumsResult ? <AlbumsList albums={getAlbumsResult} /> : ''}
        </PageContainer>
    );
}

export default Albums;
