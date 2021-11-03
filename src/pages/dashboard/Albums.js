import PageContainer from '../../components/layout/Container';
import Title from '../../components/ui/Title';
import AlbumsList from '../../components/Albums/AlbumsList';
import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import ReturnButton from '../../components/ui/ReturnButton';
import { useDispatch, useSelector } from 'react-redux';
import { getListAlbums } from '../../actions/AlbumAction';

function Albums() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { getListAlbumsResult, getListAlbumsLoading, getListAlbumsError } =
        useSelector((state) => state.albumReducer);

    useEffect(() => {
        dispatch(getListAlbums(id));
    }, [dispatch]);

    return (
        <PageContainer>
            <ReturnButton link={'/'} />
            <Title title={'List of Albums'} variant="h2" />
            {getListAlbumsResult ? (
                <AlbumsList albums={getListAlbumsResult} />
            ) : getListAlbumsLoading ? (
                <p>Loading... </p>
            ) : (
                <p>{getListAlbumsError ? getListAlbumsError : 'Data Kosong'}</p>
            )}
        </PageContainer>
    );
}

export default Albums;
