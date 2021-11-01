import PageContainer from '../../components/layout/Container';
import Title from '../../components/layout/Title';
import PhotosList from '../../components/ui/Photos/PhotosList';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getListPhotos } from '../../actions/PhotoAction';

function Photos() {
    // const [photos, setPhotos] = useState([]);
    const { id } = useParams();
    const { getListPhotosResult, getListPhotosLoading, getListPhotosError } =
        useSelector((state) => state.photoReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        // const fetchData = async () => {
        //     const res = await getPhotos(id);
        //     setPhotos(res.data);
        // };
        // fetchData();
        dispatch(getListPhotos(id));
    }, [dispatch]);

    return (
        <PageContainer>
            <Title title={'List of Photos'} />
            {getListPhotosResult ? (
                <PhotosList photos={getListPhotosResult} />
            ) : getListPhotosLoading ? (
                <p>Loading... </p>
            ) : (
                <p>{getListPhotosError ? getListPhotosError : 'Data Kosong'}</p>
            )}
        </PageContainer>
    );
}

export default Photos;
