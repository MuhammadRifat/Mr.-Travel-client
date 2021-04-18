import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Col } from 'react-bootstrap';
import './Guide.css';

// For creating to show Travel guide
const Guide = ({advice, handleContinueBtn}) => {
    const {title, date, image, id} = advice; 
    return (
        <Col md={4}>
            <div className="bg-light border rounded mt-3 box">
                <div className="column" id="zoomIn">
                    <figure>
                        <img src={image} alt="" className="img-fluid rounded" style={{ width: '100%', height: '250px' }} />
                    </figure>
                </div>
                <div className="p-3">
                    <p className="text-secondary">{date}</p>
                    <h5>{title}</h5>
                    <button className="btn btn-outline-secondary mt-2" onClick={() => handleContinueBtn(id)}>Continue <FontAwesomeIcon icon={faArrowRight} /></button>
                </div>
            </div>
        </Col>
    );
};

export default Guide;