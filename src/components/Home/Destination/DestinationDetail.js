import React from 'react';
import { Col } from 'react-bootstrap';
import adventureImg from '../../../images/adventure.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMountain, faArrowRight } from '@fortawesome/free-solid-svg-icons'

const DestinationDetail = ({type}) => {
    const { name, icon, image } = type;
    return (
        <Col md={4}>
            <div className="d-flex align-items-center justify-content-center border rounded shadow mt-3" style={{ backgroundImage: `url(${image || adventureImg})`, backgroundSize: 'cover', height: '300px' }}>
                <div className="text-center text-white">
                    <FontAwesomeIcon icon={faMountain} size="4x" />
                    <h3>{name}</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quisquam!</p>
                    <button className="btn btn-outline-secondary mt-2">Discover <FontAwesomeIcon icon={faArrowRight}/></button>
                </div>
            </div>
        </Col>
    );
};

export default DestinationDetail;