import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Component/Pages/Shared/Navbar/Navbar';
// import Navbar from '../Component/Pages/Shared/Navbar/Navbar';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet> </Outlet>
        </div>
    );
};

export default Root;