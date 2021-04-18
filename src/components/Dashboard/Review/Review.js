import React, { useContext, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { userContext } from '../../../App';

const Review = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [userReview, setUserReview] = useState({
        name: loggedInUser.name,
        country: '',
        description: '',
        photo: loggedInUser.photo,
        date: new Date()
    });

    // For capturing form data
    const handleBlur = (e) => {
        const newReview = {...userReview};
        newReview[e.target.name] = e.target.value;
        setUserReview(newReview);
    }

    // For uploading user review to the database
    const handleSubmit = (e) => {
        fetch('https://blooming-plateau-30647.herokuapp.com/addReview', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userReview)
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                alert("Review Uploaded Successfully");
                document.getElementById('name').value = '';
                document.getElementById('country').value = '';
                document.getElementById('description').value = '';
            }
        })

        e.preventDefault();
    }
    return (
        <Container>
            <h2>Review</h2><hr/>
            <Row>
                <Col md={6}>
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="name" onBlur={handleBlur} className="form-control" id="name" placeholder="Your name" value={loggedInUser.name} required/>
                        <input type="text" name="country" onBlur={handleBlur} className="form-control mt-2" id="country" placeholder="Your Country" required/>
                        <textarea name="description" onBlur={handleBlur} className="form-control mt-2" rows={3} id="description" placeholder="Description" required></textarea>
                        <button type="submit" className="btn btn-success mt-3">Submit</button>
                    </form>
                </Col>
            </Row>
        </Container>
    );
};

export default Review;