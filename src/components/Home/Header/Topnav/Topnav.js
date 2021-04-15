import React from 'react';
import { useContext } from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { userContext } from '../../../../App';
import './Topnav.css';
import logo from '../../../../images/default-monochrome.svg';

const Topnav = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" variant="dark">
                <Navbar.Brand href="#">
                    <img
                        src={logo}
                        width="200px"
                        className="d-inline-block align-top"
                        alt="Mr. Travel"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Link className="link" to="/home">Home </Link>
                        <Link className="link" to="/about">About us </Link>
                        <Link className="link" to="/projects">Projects </Link>
                        <Link className="link" to="/contact">Contact </Link>
                        <Link className="link" to="/admin">Admin </Link>
                        {/* Dynamically change login button to user image */}
                        {
                            loggedInUser.email ? <Image src={loggedInUser.photo} alt="" style={{ width: '40px', height: '40px', marginRight: '60px' }} roundedCircle /> : <Link className="link" to="/login"><button id="login-btn">Login</button></Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
};

export default Topnav;