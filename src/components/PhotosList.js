function PhotosList(props) {
    return (
    <div className="row mx-0 mt-3 justify-content-center">
        {props.photos.map((photo => (
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
        )))}
    </div>
    );
}

export default PhotosList;