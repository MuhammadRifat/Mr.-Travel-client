import React, { useContext, useEffect, useState } from "react";
import './Dashboard.css';
import { Col, Container, Row } from "react-bootstrap";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTasks, faPlus, faEdit, faBars, faArrowLeft, faFileMedical } from '@fortawesome/free-solid-svg-icons'
import OrderList from "../OrderList/OrderList";
import AddTour from "../AddTour/AddTour";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import ManageTours from "../ManageTours/ManageTours";
import BookingList from "../BookingList/BookingList";
import Review from "../Review/Review";
import { userContext } from "../../../App";
import NotFound from "../../NotFound/NotFound";
import Home from "../../Home/Home/Home";
import Topnav from "../../Home/Header/Topnav/Topnav";


const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);

    useEffect(() => {
        fetch('http://localhost:5000/isAdmin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const newUser = { ...loggedInUser };
                newUser.isAdmin = data;
                newUser.isSimpleUser = !data;
                setLoggedInUser(newUser);
            })
    }, [])

    // For creating sidenav with react router
    const routes = [
        {
            path: "/dashboard",
            exact: true,
            sidebar: () => "",
            main: () => <BookingList />
        },
        {
            path: "/dashboard/add-tour",
            sidebar: () => "",
            main: () => loggedInUser.isAdmin && <AddTour /> || <NotFound />
        },
        {
            path: "/dashboard/make-admin",
            sidebar: () => "",
            main: () => loggedInUser.isAdmin && <MakeAdmin /> || <NotFound />
        },
        {
            path: "/dashboard/manage-tours",
            sidebar: () => "",
            main: () => loggedInUser.isAdmin && <ManageTours /> || <NotFound />
        },
        {
            path: "/dashboard/booking-list",
            sidebar: () => "",
            main: () => <BookingList />
        },
        {
            path: "/dashboard/review",
            sidebar: () => "",
            main: () => loggedInUser.isSimpleUser && <Review /> || <NotFound />
        }
    ];
    return (
        <>
        <Topnav></Topnav>
        <hr/>
        <Router>
            <Container fluid>
                <Row>
                    <Col md={2} className="admin-menu">
                        <div>
                            <ul className="mt-4" style={{ listStyleType: "none", padding: 0 }}>
                                <Link className="link" to="/dashboard/booking-list">
                                    <li><FontAwesomeIcon icon={faBars} /> Booking List</li>
                                </Link>
                                {loggedInUser.isAdmin && <div>
                                    <Link className="link" to="/dashboard/add-tour">
                                        <li><FontAwesomeIcon icon={faPlus} /> Add Tour</li>
                                    </Link>
                                    <Link className="link" to="/dashboard/make-admin">
                                        <li><FontAwesomeIcon icon={faEdit} /> Make Admin</li>
                                    </Link>
                                    <Link className="link" to="/dashboard/manage-tours">
                                        <li><FontAwesomeIcon icon={faTasks} /> Manage Tours</li>
                                    </Link>
                                </div>}

                                {loggedInUser.isSimpleUser && <Link className="link" to="/dashboard/review">
                                    <li><FontAwesomeIcon icon={faFileMedical} /> Review</li>
                                </Link>}
                            </ul>

                            <Switch>
                                {routes.map((route, index) => (
                                    <Route
                                        key={index}
                                        path={route.path}
                                        exact={route.exact}
                                        children={<route.sidebar />}
                                    />
                                ))}
                            </Switch>
                        </div>
                    </Col>

                    <Col md={10}>
                        <Switch>
                            {routes.map((route, index) => (
                                // Render more <Route>s with the same paths as
                                // above, but different components this time.
                                <Route
                                    key={index}
                                    path={route.path}
                                    exact={route.exact}
                                    children={<route.main />}
                                />
                            ))}
                        </Switch>
                    </Col>
                </Row>
            </Container>
        </Router>
        </>
    );
};

export default Dashboard;