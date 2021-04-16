import React from 'react';
import { useState } from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';

const MakeAdmin = () => {
    const [adminEmail, setAdminEmail] = useState('');
    const [spinner, setSpinner] = useState(false);

    const handleBlur = (e) => {
        setAdminEmail(e.target.value);
    }

    const handleSubmit = (e) => {
        setSpinner(true);
        fetch(`http://localhost:5000/addAdmin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: adminEmail})
        })
        .then(res => {
            if(res){ 
                setSpinner(false);
                alert("Admin added successfully");
            }
            setSpinner(false);
        })

        e.preventDefault();
    }
    return (
        <Container>
            <h2>Make Admin</h2>
            <hr/>
            {
                spinner && <div className="text-center mt-3"><Spinner animation="border" /></div>
            }
            <form className="bg-white p-3 rounded" onSubmit={handleSubmit}>
                <Row>
                    <Col md={6}>
                        <input name="email" onBlur={handleBlur} type="email" className="form-control" placeholder="Enter email" required/>
                    </Col>
                    <Col md={6}>
                        <button className="btn btn-success" type="submit">Save</button>
                    </Col>
                </Row>
            </form>
        </Container>
    );
};

export default MakeAdmin;