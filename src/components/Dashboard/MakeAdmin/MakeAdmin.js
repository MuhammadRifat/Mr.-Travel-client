import React from 'react';
import { useState } from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';

const MakeAdmin = () => {
    const [adminData, setAdminData] = useState({
        name: '',
        email: ''
    });
    const [spinner, setSpinner] = useState(false);

    const handleBlur = (e) => {
        const newData = {...adminData};
        newData[e.target.name] = e.target.value;
        setAdminData(newData);
    }

    const handleSubmit = (e) => {
        setSpinner(true);
        fetch(`http://localhost:5000/addAdmin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(adminData)
        })
        .then(res => {
            if(res){ 
                setSpinner(false);
                alert("Admin added successfully");
                document.getElementById('name').value = "";
                document.getElementById('email').value = "";
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
            <form className="bg-white p-3 mb-3 rounded" onSubmit={handleSubmit}>
                <Row>
                    <Col md={6}>
                        <input name="name" onBlur={handleBlur} type="text" className="form-control" id="name" placeholder="Enter Name" required/>
                        <input name="email" onBlur={handleBlur} type="email" className="form-control mt-2" id="email" placeholder="Enter email" required/>
                        <button className="btn btn-success mt-2" type="submit">Save</button>
                    </Col>
                </Row>
            </form>
        </Container>
    );
};

export default MakeAdmin;