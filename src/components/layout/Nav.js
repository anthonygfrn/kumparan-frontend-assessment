import * as React from 'react';
import { Navbar, Container } from 'react-bootstrap';

function TopNav() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>Kumparan Assessment</Navbar.Brand>
                </Container>
            </Navbar>
        </>
    );
}

export default React.memo(TopNav);
