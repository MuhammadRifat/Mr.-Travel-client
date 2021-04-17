import React, { useContext, useEffect, useState } from 'react';
import { Col, Container, Row, Spinner, Table } from 'react-bootstrap';
import { userContext } from '../../../App';
import Booking from './Booking/Booking';
import BookingUser from './BookingUser/BookingUser';

const BookingList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [bookings, setBookings] = useState([]);
    const [spinner, setSpinner] = useState(false);

    useEffect(() => {
        setSpinner(true);
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email, isAdmin: loggedInUser.isAdmin })
        })
            .then(res => res.json())
            .then(data => {
                setBookings(data);
                setSpinner(false);
            })
    }, [])

    const handleStatusClick = (e, id) => {
        setSpinner(true);
        fetch('http://localhost:5000/updateBooking', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id: id, status: e.target.value})
        })
        .then(res => res.json())
        .then(data => {
            setSpinner(false);
            // console.log(data);
        })
    }

    return (
        <Container>
            <h2>Booking List</h2><hr />
            {
                spinner && <div className="text-center mt-3"><Spinner animation="border" /></div>
            }
            {loggedInUser.isSimpleUser && <Row>
                {
                    bookings.map(booking => <Booking booking={booking.tour} status={booking.status} key={booking._id}></Booking>)
                }
            </Row>}

            {loggedInUser.isAdmin &&
                <Table responsive="md" className="bg-white border">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Tour</th>
                            <th>Payment Id</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map(booking => <BookingUser booking={booking} handleStatusClick={handleStatusClick} key={booking._id}></BookingUser>)
                        }
                    </tbody>
                </Table>
            }
        </Container>
    );
};

export default BookingList;