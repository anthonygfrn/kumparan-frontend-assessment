import {Link} from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';

function Nav() {

    const navStyle = {
        color: 'Black',
        textDecoration: 'none',
        listStyle: 'none'
    }

  return (
    <nav>
        <ul>
        <BrowserRouter>
            <Link style={navStyle} to='/Users'>
                <li>Users</li>
            </Link>
        </BrowserRouter>
        </ul>
    </nav>
  );
}

export default Nav;
