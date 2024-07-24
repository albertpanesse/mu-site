import React from 'react';

import Header from '../../elements/header';
import Footer from '../../elements/footer';
import { Outlet } from 'react-router-dom';

const SignedInLayout: React.FC = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default SignedInLayout;
