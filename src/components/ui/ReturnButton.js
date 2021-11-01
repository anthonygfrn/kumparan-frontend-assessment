import * as React from 'react';
import { Link } from 'react-router-dom';

function ReturnButton({ link }) {
    return (
        <div className="row mx-0 flex-column mt-4">
            <Link to={link} className="btn btn-outline-dark m-3">
                <i className="fa fa-caret-left fa-fw"></i> Return
            </Link>
        </div>
    );
}

export default React.memo(ReturnButton);
