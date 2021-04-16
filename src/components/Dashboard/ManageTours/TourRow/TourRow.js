import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons'
import './TourRow.css';

const TourRow = ({ tour, handleDelete, handleEdit }) => {
    const {title, location, time, cost, _id} = tour;
    return (
        <tr>
            <td>{title}</td>
            <td>{location}</td>
            <td>{time}</td>
            <td>${cost}</td>
            <td><button className="edit-btn" onClick={() => handleEdit(_id)}><FontAwesomeIcon icon={faEdit} /></button> <button className="delete-btn" onClick={() => handleDelete(_id)}><FontAwesomeIcon icon={faTrashAlt} /></button></td>
        </tr>
    );
};

export default TourRow;