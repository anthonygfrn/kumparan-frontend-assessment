import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Photos() {
    const [photos, setPhotos] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`)
            .then((res) => {
                setPhotos(res.data);
            }, []);
    });

    return (
        <div className="container">
            <div className="row mt-4 mx-0 flex-column">
                <div className="h2">List of photo(s)</div>
            </div>
            <div className="row mx-0 mt-3 justify-content-center">
                {photos.map((photo) => (
                    <div
                        className="col-lg-3 col-md-4 col-6 mb-1 p-2 text-center"
                        key={photo.id}
                    >
                        <div className="border border-dark h-100">
                            <img
                                className="img-fluid"
                                src={photo.url}
                                alt={photo.title}
                            />
                            <div className="h6 font-italic font-weight-normal m-2">
                                "{photo.title}"
                            </div>
                            <div className="small m-2">
                                photo id : {photo.id}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Photos;
