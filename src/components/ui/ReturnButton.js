import { Link } from "react-router-dom";

function ReturnButton() {
    return(
        <div className="row mx-0 flex-column mt-4">
        <Link to="/" className="btn btn-outline-dark m-3">
            <i className="fa fa-caret-left fa-fw"></i> Return
        </Link>
        </div>
    );
}

export default ReturnButton;