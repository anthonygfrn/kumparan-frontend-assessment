import React from 'react';
import PhotoId from './PhotoId';
import PhotoBorder from './PhotoBorder';
import Container from '../layout/Container';
import Column from '../layout/Column';
import Image from '../ui/Image';
import Text from '../ui/Text';

function PhotosList(props) {
    return (
        <Container variant="row mx-0 mt-3 justify-content-center">
            {props.photos.map((photo) => (
                <Column
                    variant="col-lg-3 col-md-4 col-6 mb-1 p-2 text-center"
                    key={photo.id}
                >
                    <PhotoBorder>
                        <Image src={photo.url} alt={photo.title} />
                        <Text variant="h6 font-italic font-weight-normal m-2">
                            {photo.title}
                        </Text>
                        <PhotoId>photo id : {photo.id}</PhotoId>
                    </PhotoBorder>
                </Column>
            ))}
        </Container>
    );
}

export default PhotosList;
