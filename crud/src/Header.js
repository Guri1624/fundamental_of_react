import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
function Header() {
    
    const navigate = useNavigate();
const user=JSON.parse(localStorage.getItem('user-info'))
//   console.warn(user)
  function Logout()
  {
    localStorage.clear();
    navigate('/Register')
  }
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">navbar</Navbar.Brand>
                <Nav className="mr-auto nav_bar_wrapper">
                    {
                        localStorage.getItem('user-info') ?
                            <>
                                <Link  to="/">Product list</Link>
                                <Link to="/Addproduct">add -product</Link>
                                <Link to="/Update/product">Update-product</Link>
                                <Link to="/search">Search</Link>
                            </>
                            :
                            <>
                                <Link to="/login">Login-product</Link>
                                <Link to="/Register"> Register</Link>
                            </>
                    }
                </Nav>
               { localStorage.getItem('user-info')?
                <Nav>
                    <NavDropdown title={user && user.name}><br />
                        <NavDropdown.Item onClick={Logout}>Logout</NavDropdown.Item>
                        <NavDropdown.Item>Profile</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                :null
}
            </Navbar>
        </div>
    )
}
export default Header;