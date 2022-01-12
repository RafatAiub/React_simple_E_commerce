import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

import { Link, useNavigate } from 'react-router-dom'
function Header() {
    let user = JSON.parse(localStorage.getItem('user-info'));
    const navigate = useNavigate();
    function logout() {
        localStorage.clear();
        navigate("/login");
    }

    return (
        <div className="col-sm-12">
            <Navbar bg="dark" variant="dark">

                <Navbar.Brand ><Link className="btn btn-dark" to="/"><h3>Simple E-commerce</h3></Link></Navbar.Brand>
                
                <Nav className="me-auto navbar_warapper">
                    <Link className="btn btn-dark" to="/"><h5>Products List</h5></Link>
                    <Link className="btn btn-dark" to="/search"><h5>Search Products</h5></Link>
                    {
                        localStorage.getItem('user-info') ?
                            <>
                                <Link className="btn btn-dark" to="/add"><h5>Add Product</h5></Link>
                                <Link className="btn btn-dark" to="/update"><h5>update Product</h5></Link>
                                <Link className="btn btn-dark" to="/cart"><h5>Cart</h5></Link>
                            </>
                            :
                            <>
                                <Link className="btn btn-dark" to="/login"><h5>Login</h5></Link>
                                <Link className="btn btn-dark" to="/signup"><h5>Signup</h5></Link>
                            </>
                    }
                </Nav>
                
                
                {localStorage.getItem('user-info') ?
                    <Nav className="me-auto">
                        <NavDropdown title={user && user.first_name}>
                            <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    : null}

            </Navbar>

        </div>
    );
}

export default Header;