import React from 'react';
import { Col, Image } from 'react-bootstrap';

const TestimonialsDetail = ({testimonial}) => {
    const {name, image, country, comment} = testimonial;
    return (
        <Col md={4}>
            <div className="bg-light border rounded mt-3 shadow p-3">
                <p>{comment}</p>
                <div className="d-flex mt-3">
                    <Image src={image} alt="" style={{ width: '50px', height: '50px'}} roundedCircle />
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