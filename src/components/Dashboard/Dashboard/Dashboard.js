import React from "react";
import './Dashboard.css';
import { Col, Container, Row } from "react-bootstrap";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTasks, faPlus, faEdit, faBars } from '@fortawesome/free-solid-svg-icons'
import OrderList from "../OrderList/OrderList";
import AddTour from "../AddTour/AddTour";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import ManageTours from "../ManageTours/ManageTours";

// For creating sidenav with react router
const routes = [
    {
        path: "/dashboard",
        exact: true,
        sidebar: () => "",
        main: () => <OrderList />
    },
    {
        path: "/dashboard/order-list",
        exact: true,
        sidebar: () => "",
        main: () => <OrderList />
    },
    {
        path: "/dashboard/add-tour",
        sidebar: () => "",
        main: () => <AddTour />
    },
    {
        path: "/dashboard/make-admin",
        sidebar: () => "",
        main: () => <MakeAdmin />
    },
    {
        path: "/dashboard/manage-tours",
        sidebar: () => "",
        main: () => <ManageTours />
    }
];

const Dashboard = () => {
    return (
        <Router>
            <Container fluid>
                <Row>
                    <Col md={2} className="admin-menu">
                        <div>
                            <ul className="mt-4" style={{ listStyleType: "none", padding: 0 }}>
                                <Link className="link" to="/dashboard/order-list">
                                    <li><FontAwesomeIcon icon={faBars} /> Order List</li>
                                </Link>
                                <Link className="link" to="/dashboard/add-tour">
                                    <li><FontAwesomeIcon icon={faPlus} /> Add Tour</li>
                                </Link>
                                <Link className="link" to="/dashboard/make-admin">
                                    <li><FontAwesomeIcon icon={faEdit} /> Make Admin</li>
                                </Link>
                                <Link className="link" to="/dashboard/manage-tours">
                                    <li><FontAwesomeIcon icon={faTasks} /> Manage Tours</li>
                                </Link>
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
    );
};

export default Dashboard;