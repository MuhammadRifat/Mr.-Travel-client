import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { Col, Container, Row, Spinner, Table } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import { userContext } from '../../../../App';
import PayProcess from '../../../Payment/PayProcess/PayProcess';
import Topnav from '../../Header/Topnav/Topnav';

const BookingForm = () => {
    const history = useHistory();
    const { id } = useParams();

    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [tourData, setTourData] = useState({});
    const [shipmentData, setShipmentData] = useState(null);

    const [user, setUser] = useState({
        name: loggedInUser.name,
        email: loggedInUser.email,
        address: '',
        mobile: ''
    });
    const [spinner, setSpinner] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:5000/tourById/${id}`)
            .then(res => res.json())
            .then(data => {
                setTourData(data);
            })
    }, [])

    const handleBlur = (e) => {
        const newData = { ...user };
        newData[e.target.name] = e.target.value;
        setUser(newData);
    }

    // For adding order product and customer details into the database
    const handleSubmit = (e) => {
        setShipmentData(user);

        e.preventDefault();
    };

    const handlePaymentSuccess = paymentId => {
        const userDetails = {
            ...loggedInUser,
            tour: tourData,
            bookingUser: shipmentData,
            paymentId,
            status: 'Pending',
            bookingTime: new Date()
        };

        fetch('http://localhost:5000/addBooking', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userDetails)
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    history.push('/dashboard/booking-list');
                }
            })
    }
    return (
        <>
            <Topnav></Topnav>
            <Container>
                <hr />
                <h2>Please, Fill up this form</h2><hr />
                {
                    spinner && <div className="text-center mt-3"><Spinner animation="border" /></div>
                }
                <div className="text-center">
                    <Table responsive="md" className="mt-3 border bg-white">
                        <thead>
                            <tr>
                                <th>Tour Title</th>
                                <th>Location</th>
                                <th>Package Time</th>
                                <th>Total Cost</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{tourData.title}</td>
                                <td>{tourData.location}</td>
                                <td>{tourData.time}</td>
                                <td>${tourData.cost}</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                <form className="bg-white p-3 rounded" onSubmit={handleSubmit} style={{ display: shipmentData ? 'none' : 'block' }}>
                    <Row>
                        <Col md={6}>
                            <b>Your Name</b><br />
                            <input name="name" onBlur={handleBlur} type="text" className="form-control" value={loggedInUser.name} placeholder="Enter Your Name" required />
                        </Col>
                        <Col md={6}>
                            <b>Your Email</b><br />
                            <input name="email" onBlur={handleBlur} type="email" className="form-control" value={loggedInUser.email} placeholder="Enter Your Email" required />
                        </Col>
                    </Row>
                    <Row className="mt-2">
                        <Col md={6}>
                            <b>Address</b><br />
                            <input name="address" onBlur={handleBlur} type="text" className="form-control" placeholder="Enter Address" required />
                        </Col>
                        <Col md={6}>
                            <b>Mobile Number</b><br />
                            <input name="mobile" onBlur={handleBlur} type="text" className="form-control" placeholder="Enter Mobile Number" required />
                        </Col>
                    </Row><hr />
                    <div className="text-center"><button className="btn btn-success" type="submit">Proceed to Pay</button></div>
                </form>
                <Row className="justify-content-md-center">
                    <Col md={6} style={{ display: shipmentData ? 'block' : 'none' }} className="bg-white p-3">
                        <PayProcess handlePayment={handlePaymentSuccess}></PayProcess>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default BookingForm;