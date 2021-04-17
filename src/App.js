import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { createContext } from 'react';
import { useState } from 'react';
import NotFound from './components/NotFound/NotFound';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import BookingForm from './components/Home/Tours/BookingForm/BookingForm';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AllTour from './components/AllTour/AllTour';
import AllDestinations from './components/AllDestinations/AllDestinations';

export const userContext = createContext();

function App() {
  document.body.style.backgroundColor = 'rgb(241, 239, 239)';
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/tours">
            <AllTour />
          </Route>
          <Route path="/destinations">
            <AllDestinations />
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path="/booking-form/:id">
            <BookingForm />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
