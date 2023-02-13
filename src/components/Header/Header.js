import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="header py-4">
            <Link to="/" className="text-light link mx-4 h4">Insert Data</Link>
            <Link to="/read" className="text-light link mx-4 h4">All Data</Link>
        </div>
    );
};

export default Header;