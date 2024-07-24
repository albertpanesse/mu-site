import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../../elements/header';
import Footer from '../../elements/footer';
import Navbar from '../../elements/navbar';

const CleanLayout: React.FC = () => {
    return (
        <>
            <Header />
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
};

export default CleanLayout;
