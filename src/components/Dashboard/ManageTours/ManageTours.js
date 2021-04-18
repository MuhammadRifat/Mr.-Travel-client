import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Spinner, Table } from 'react-bootstrap';
import { useHistory } from 'react-router';
import TourRow from './TourRow/TourRow';

const ManageTours = () => {
    const [tours, setTours] = useState([]);
    const [spinner, setSpinner] = useState(false);

    // Load all tours for managing
    useEffect(() => {
        setSpinner(true);
        fetch('https://blooming-plateau-30647.herokuapp.com/tours')
            .then(res => res.json())
            .then(data => {
                setTours(data);
                setSpinner(false);
            })
    }, [])

    // For deleting tour from the database
    const handleDelete = (id) => {
        const newTours = tours.filter(tour => tour._id != id);
        setTours(newTours);

        fetch(`https://blooming-plateau-30647.herokuapp.com/deleteTour/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => {
            if(res){
                // alert("product deleted successfully");
            }
        })
    }

    const history = useHistory();
    const handleEdit = (id) => {
        history.push(`/dashboard/edit-product/${id}`);
    }

    return (
        <Container>
            <h2>Manage Tours</h2><hr/>
            {
                spinner && <div className="text-center mt-3"><Spinner animation="border" /></div>
            }
            <Table responsive="md" className="bg-white border">
                <thead>
                    <tr>
                        <th>Tour Title</th>
                        <th>Location</th>
                        <th>Package Time</th>
                        <th>Cost</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tours?.map(tour => <TourRow tour={tour} handleDelete={handleDelete} handleEdit={handleEdit} key={tour._id}></TourRow>)
                    }
                </tbody>
            </Table>
        </Container>
    );
};

export default ManageTours;