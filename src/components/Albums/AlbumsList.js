import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/ui/Button';

function AlbumsList(props) {
    return (
        <div className="row mx-0 mt-3 justify-content-center">
            {props.albums.map((album) => (
                <div className="col-md-3 mb-1 p-2 text-center" key={album.id}>
                    <div className="border border-dark p-3 h-100">
                        <div className="h5">
                            {album.title.length < 25
                                ? `${album.title}`
                                : `${album.title.substring(0, 25)}...`}
                        </div>
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
                    </div>
                </div>
            ))}
        </div>
    );
}

export default AlbumsList;
