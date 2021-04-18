import React from 'react';
import { Col } from 'react-bootstrap';
import adventureImg from '../../../images/adventure.jpg';
import './DestinationDetail.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const DestinationDetail = ({ type, handleDiscoverBtn }) => {
    const { name, image, id } = type;
    return (
        <Col md={4} className="frame">
            <div className="mt-3">
            <img src={image || adventureImg} className="rounded border shadow" alt="" />
            <h3 className="centered text-white">{name}</h3>
            <div className="text-center rounded details" style={{ color: 'rgb(1, 26, 1)' }}>
                <h4>{name}</h4>
                <button onClick={() => handleDiscoverBtn(id)} className="btn btn-outline-dark mt-4">Discover <FontAwesomeIcon icon={faArrowRight} /></button>
            </div>
            </div>
        </Col>
    );
};

export default DestinationDetail;