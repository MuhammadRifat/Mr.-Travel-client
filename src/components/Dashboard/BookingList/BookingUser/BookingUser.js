import React from 'react';

const BookingUser = ({booking, handleStatusClick}) => {
    const {bookingUser, tour, paymentId, _id, status} = booking;

    return (
        <tr>
            <td>{bookingUser.name}</td>
            <td>{bookingUser.email}</td>
            <td>{tour.title}- <small>{tour.location}</small></td>
            <td>{paymentId}</td>
            <td>
                <select onChange={(e) => handleStatusClick(e, _id)} className={status === 'Pending' ? `bg-danger rounded text-white p-1`: `bg-success rounded text-white p-1`}>
                    <option disabled selected>{status}</option>
                    <option value="Pending">Pending</option>
                    <option value="On going">On going</option>
                    <option value="Done">Done</option>
                </select>
            </td>
        </tr>
    );
};

export default BookingUser;