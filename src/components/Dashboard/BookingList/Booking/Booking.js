import React from 'react';
import { Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faClock } from '@fortawesome/free-solid-svg-icons'

const Booking = ({booking, status}) => {
    const {title, imageUrl, location, time} = booking;
    return (
        <Col md={4}>
            <div className="bg-light border rounded mt-3">
                <img src={imageUrl} alt="" className="img-fluid rounded" style={{width:'100%', height:'230px'}} />
                <div className="p-3">
                    <h4>{title}</h4>
                    <div className="d-flex mt-3">
                        <small><FontAwesomeIcon icon={faMapMarkerAlt}/> {location}</small><br />
                        <small className="ml-auto"><FontAwesomeIcon icon={faClock}/> {time}</small>
                    </div>
                    <button className={status==='Pending'? "btn btn-danger btn-block mt-2":"btn btn-success btn-block mt-2"} disabled>{status}</button>
                </div>
            </div>
        </Col>
    );
};

export default Booking;