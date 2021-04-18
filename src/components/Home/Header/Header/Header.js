import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Main from '../Main/Main';
import Topnav from '../Topnav/Topnav';
import './Header.css';

// Homepage Header
const Header = () => {
    return (
        <Container fluid className="header">
            <Topnav></Topnav>
            <Row className="justify-content-md-center mt-5 pt-5">
                <Col md={5}>
                    <div className="text-light text-center" style={{fontSize:'60px',fontWeight:'bold'}}>
                        Adventure<br/><i>is out there</i>
                    </div>
                </Col>
                <Col md={5}>
                    <Main></Main>
                </Col>
            </Row>
        </Container>
    );
};

export default Header;