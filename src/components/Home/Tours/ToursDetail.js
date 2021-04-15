import React from 'react';
import { Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faClock } from '@fortawesome/free-solid-svg-icons'

const ToursDetail = ({ tour }) => {
    const { name, location, country, time, price, image } = tour;
    return (
        <Col md={4}>
            <div className="bg-light border rounded mt-3 shadow">
                <img src={image} alt="" className="img-fluid w-100 rounded" />
                <div className="p-3">
                    <h4>{name}</h4>
                    <small><FontAwesomeIcon icon={faMapMarkerAlt}/> {location} / {country}</small><br />
                    <small><FontAwesomeIcon icon={faClock}/> {time}</small><hr/>
                    <div className="d-flex mt-3">
                        <h3 className="text-success">${price}</h3>
                        <button className="btn btn-success ml-auto">Book Now</button>
                    </div>
                </div>
            </div>
        </Col>
    );
};

export default ToursDetail;