import {Link} from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

function TopNav() {

    const navStyle = {
        color: 'blue',
        textDecoration: 'none'
    }

    return (
    <>
    <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand>Kumparan Assessment</Navbar.Brand>
        <Nav className="me-auto" >
            <BrowserRouter>
                <Link style={navStyle} to='/'>
                    <li>Users</li>
                </Link>
            </BrowserRouter>
        </Nav>
        </Container>
    </Navbar>
    </>
  );
}


export default TopNav;
