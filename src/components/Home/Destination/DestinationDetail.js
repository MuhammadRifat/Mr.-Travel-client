import React from 'react';
import { Col } from 'react-bootstrap';
import adventureImg from '../../../images/adventure.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const DestinationDetail = ({type, handleDiscoverBtn}) => {
    const { name, image, id } = type;
    return (
        <Col md={4}>
            <div className="d-flex align-items-center justify-content-center border rounded shadow mt-3" style={{ backgroundImage: `url(${image || adventureImg})`, backgroundSize: 'cover', height: '300px' }}>
                <div className="text-center" style={{color:'rgb(1, 26, 1)'}}>
                    <h3>{name}</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quisquam!</p>
                    <button onClick={() => handleDiscoverBtn(id)} className="btn btn-secondary mt-2">Discover <FontAwesomeIcon icon={faArrowRight}/></button>
                </div>
            </div>
        </Col>
    );
};

export default DestinationDetail;