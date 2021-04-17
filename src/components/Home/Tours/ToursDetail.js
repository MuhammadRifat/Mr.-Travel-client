import React from 'react';
import { Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faClock, faCartPlus } from '@fortawesome/free-solid-svg-icons'

const ToursDetail = ({ tour, handleBookBtn }) => {
    const { title, location, time, cost, imageUrl, _id } = tour;
    return (
        <Col md={4}>
            <div className="bg-light border rounded mt-3 shadow">
                <img src={imageUrl} alt="" className="img-fluid rounded" style={{width:'100%', height:'250px'}} />
                <div className="p-3">
                    <h4>{title}</h4>
                    <small><FontAwesomeIcon icon={faMapMarkerAlt}/> {location}</small><br />
                    <small><FontAwesomeIcon icon={faClock}/> {time}</small><hr/>
                    <div className="d-flex mt-3">
                        <h3 className="text-success">${cost}</h3>
                        <button className="btn btn-success ml-auto" onClick={() => handleBookBtn(_id)}><FontAwesomeIcon icon={faCartPlus}/> Book Now</button>
                    </div>
                </div>
            </div>
        </Col>
    );
};

export default ToursDetail;