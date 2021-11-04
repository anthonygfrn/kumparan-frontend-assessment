import PageContainer from '../../components/layout/Container';
import Title from '../../components/layout/Title';
import PhotosList from '../../components/ui/Photos/PhotosList';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppState } from '../../context/appState';
import { getPhotosList } from '../../actions/photosAction';

function Photos() {
    const { id } = useParams();
    const [state, dispatch] = useAppState();
    const { getPhotosResult } = state;

    useEffect(() => {
        getPhotosList(dispatch, id);
    }, [dispatch, id]);

    return (
        <PageContainer>
            <Title title={'List of Photos'} />
            {getPhotosResult ? <PhotosList photos={getPhotosResult} /> : ''}
        </PageContainer>
    );
}

export default Photos;
