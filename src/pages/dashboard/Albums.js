import PageContainer from '../../components/layout/Container';
import Title from '../../components/layout/Title';
import AlbumsList from '../../components/ui/Albums/AlbumsList';
import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import ReturnButton from '../../components/ui/ReturnButton';
import { useDispatch, useSelector } from 'react-redux';
import { getListAlbums } from '../../actions/AlbumAction';

function Albums() {
    const { id } = useParams();
    const { getListAlbumsResult, getListAlbumsLoading, getListAlbumsError } =
        useSelector((state) => state.albumReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getListAlbums(id));
    }, [dispatch]);

    return (
        <PageContainer>
            <ReturnButton link={'/'} />
            <Title title={'List of Albums'} />
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
