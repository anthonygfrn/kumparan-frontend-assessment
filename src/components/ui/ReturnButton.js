import * as React from 'react';
import { Link } from 'react-router-dom';
import Container from '../layout/Container';

function ReturnButton({ link, text }) {
    return (
        <Container variant="row mx-0 flex-column mt-4">
            <Link to={link} className="btn btn-outline-dark m-3">
                {text}
            </Link>
        </Container>
    );
}

export default React.memo(ReturnButton);
