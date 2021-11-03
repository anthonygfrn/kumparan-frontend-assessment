import * as React from 'react';
import { Card } from 'react-bootstrap';

function ContentBorder(props) {
    return <Card className={props.variant}>{props.children}</Card>;
}

export default React.memo(ContentBorder);
