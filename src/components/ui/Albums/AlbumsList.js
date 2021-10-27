import React from 'react';
import { Link } from 'react-router-dom';

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
                        <Link
                            className="btn btn-outline-primary btn-sm"
                            to={{
                                pathname: `/photos/${album.id}`,
                            }}
                        >
                            {' '}
                            See Photo(s)
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default AlbumsList;
