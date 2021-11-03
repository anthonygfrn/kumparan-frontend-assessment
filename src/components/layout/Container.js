import * as React from 'react';
import { Container } from 'react-bootstrap';

function PageContainer(props) {
    return <Container className={props.variant}>{props.children}</Container>;
}

export default React.memo(PageContainer);
