import React from 'react';
import Topnav from '../Home/Header/Topnav/Topnav';

const NotFound = () => {
    return (
        <>
            <Topnav></Topnav>
            <hr/>
            <h3 style={{textAlign: 'center'}}>404! Page Not Found.</h3>
        </>
    );
};

export default NotFound;