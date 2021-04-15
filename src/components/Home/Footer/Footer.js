import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <Container fluid className="bg-dark mt-5 text-white">
            <Container>
                <Row className="pt-5">
                    <Col md={3}>
                        <div className="p-2">
                            <h4>Contact Information</h4><hr />
                            <p>
                                We would be more than happy to help you. Our team advisor are 24/7 at your service to help you.<br /><br />
                                <FontAwesomeIcon icon={faEnvelope} /> hrifat450@gmail.com<br />
                                <FontAwesomeIcon icon={faPhoneAlt} /> Phone: 01772722727<br />
                                <FontAwesomeIcon icon={faMapMarkerAlt} /> Mymensingh, Bangladesh<br />
                            </p>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className="p-2">
                            <h4>About Us</h4><hr />
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati ducimus quia.<br/>
                                <div className="d-flex mt-3">
                                    <Link to="#"><FontAwesomeIcon icon={faTwitter} size="2x" className="ml-3"/></Link>
                                    <Link to="#"><FontAwesomeIcon icon={faFacebook} size="2x" className="ml-3"/></Link>
                                    <Link to="#"><FontAwesomeIcon icon={faYoutube} size="2x" className="ml-3"/></Link>
                                </div>
                            </p>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className="p-2">
                            <h4>Useful Links</h4><hr />
                            <Link to="/about">About</Link><br />
                            <Link to="#">Special Offers</Link><br />
                            <Link to="#">Social</Link><br />
                            <Link to="#">Site Map</Link><br />
                            <Link to="#">Help Topics</Link><br />
                            <Link to="#">Travel Picks</Link><br />
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className="p-2">
                            <h4>Mailing List</h4><hr />
                            <p>Enter your email address for our mailing list to keep yourself updated.</p>
                            <div className="d-flex">
                                <input type="email" name="email" className="form-control" placeholder="Enter your email" />
                                <button className="btn btn-secondary" type="submit">DONE</button>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="pt-3 text-center">
                    <Col md={12}>
                        <hr/>
                        <small>Copyright {new Date().getFullYear()}, Muhammad Rifat. All rights reserved.</small>
                        <hr/>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default Footer;