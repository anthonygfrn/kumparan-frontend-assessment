import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/ui/Button';
import ContentCard from '../../components/ui/ContentCard';
import Container from '../layout/Container';
import Column from '../../components/layout/Column';
import Text from '../ui/Text';

function AlbumsList(props) {
    return (
        <Container variant="row mx-0 mt-3 justify-content-center">
            {props.albums.map((album) => (
                <Column variant="col-md-3 mb-1 p-2 text-center" key={album.id}>
                    <ContentCard variant="border border-dark p-4 mr-4 h-100">
                        <Text variant="h5">
                            {album.title.length < 25
                                ? `${album.title}`
                                : `${album.title.substring(0, 25)}...`}
                        </Text>
                        <Button variant="mt-2 btn-dark btn-outline-secondary m-2">
                            <Link
                                to={{
                                    pathname: `/photos/${album.id}`,
                                }}
                                style={{
                                    textDecoration: 'none',
                                    color: 'white',
                                }}
                            >
                                See Photo(s)
                            </Link>
                        </Button>
                    </ContentCard>
                </Column>
            ))}
        </Container>
    );
}

export default AlbumsList;
