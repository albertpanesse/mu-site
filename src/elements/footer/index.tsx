import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer>
            <p>&copy; {new Date().getFullYear()} Your Website Name. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
