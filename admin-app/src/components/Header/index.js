import React from 'react';
import {Nav, Navbar, Container} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {NavLink,Link} from 'react-router-dom'; 
import { signout } from '../../actions/auth.actions';

const Header = () => {

    const auth = useSelector(state =>state.auth);
    const dispatch = useDispatch();
    const logout = () =>{
        dispatch(signout());
    }

    const renderloggedInLinks = () => {
        return (
            <Nav>
                <li className="nav-item">
                    <span to="signup" className="nav-link" onClick={logout}>Signout</span>
                </li>
            </Nav>
        );

    } 

    const renderNonLoggedInLink = () => {
        return(
            <Nav>
                {/* <Nav.Link href="#deets">Signin</Nav.Link> */}
                <li className="nav-item">
                    <NavLink to="signin" className="nav-link">Signin</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="signup" className="nav-link">Signup</NavLink>
                </li>
            </Nav>
        );
    }

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" fixed="top" variant="dark" style={{zIndex:1 }}>
                <Container fluid>
                    {/* <Navbar.Brand href="#home">Admin Dashboard</Navbar.Brand> */}
                    <Link to="/" className="navbar-brand">Admin Dashboard</Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>
                        {auth.authenticate ? renderloggedInLinks() : renderNonLoggedInLink()}
                        
                    </Navbar.Collapse>
                </Container>
    
            </Navbar>
        </>
    )
}

export default Header
