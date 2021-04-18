import React from 'react';
import { Col, Image } from 'react-bootstrap';
import icon from '../../../images/avater.png';

// For showing all reviews in the homepage
const TestimonialsDetail = ({testimonial}) => {
    const {name, photo, country, description} = testimonial;
    return (
        <Col md={4}>
            <div className="bg-light border rounded mt-3 shadow p-3">
                <p>{description}</p>
                <div className="d-flex mt-3">
                    <Image src={photo || icon} alt="" style={{ width: '50px', height: '50px'}} roundedCircle />
                    <div className="ml-3">
                        <h4>{name}</h4>
                        <p>{country}</p>
                    </div>
                </div>
            </div>
        </Col>
    );
};

export default TestimonialsDetail;