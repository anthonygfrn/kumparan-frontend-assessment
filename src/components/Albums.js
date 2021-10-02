import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Albums extends React.Component {
    state = {
        selectedAlbum:[]
    }

    componentDidMount() {
        const postId = this.props.location.state.member;

        axios.get(`https://jsonplaceholder.typicode.com/albums?userId=${postId}`)
            .then(res => {
                const selectedAlbum = res.data;
                this.setState({
                    selectedAlbum
                });
            })
    }

    render () {
        return (
            <div className="container">
                <div className="row mx-0 flex-column mt-4">
                    <div className="h2">List of album</div>
                    <div className="mt-2">
                        <Link to="/" className="btn btn-outline-secondary"><i className="fa fa-caret-left fa-fw"></i> Back</Link>
                    </div>
                </div>
                <div className="row mx-0 mt-3 justify-content-center">
                    { this.state.selectedAlbum.map(album =>
                        <div className="col-md-3 mb-1 p-2 text-center" key={album.id}>
                            <div className="border border-success p-3 h-100">
                                <div className="h5">
                                    { album.title.length < 25 ? `${album.title}` : `${album.title.substring(0, 25)}...` }
                                </div>
                                <Link className="btn btn-outline-primary btn-sm" to={{
                                    pathname: `/photos/${album.id}`,
                                    state: { album: album.id }
                                }}> See Photo(s)
                                </Link>                            
                            </div>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}