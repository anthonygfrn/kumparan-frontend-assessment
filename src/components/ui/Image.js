import * as React from 'react';
import { Figure } from 'react-bootstrap';

function Image(props) {
    return (
        <Figure class="figure">
            <img className="img-fluid" src={props.src} alt={props.alt} />
        </Figure>
    );
}

export default React.memo(Image);
