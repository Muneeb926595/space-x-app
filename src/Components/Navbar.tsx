import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.png';

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-dark navbar-expand-md sticky-top navigation-clean-button" style={{ height: '80px', color: '#ffffff', boxShadow: '1px 1px 10px #908ffe' }}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img style={{ width: '20rem', height: '5rem' }} src={logo} alt="" />
                    </Link>
                    <button data-toggle="collapse" className="navbar-toggler" data-target="#navcol-1">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse" id="navcol-1">
                        <ul className="nav navbar-nav ml-auto">
                            <li className="nav-item" role="presentation">
                                <Link className="nav-link active" style={{ color: '#ffffff', fontSize: '0.875rem' }} to="/">
                                    HOME
                                    </Link>
                            </li>
                            <li className="nav-item" role="presentation">
                                <Link className="nav-link active" style={{ color: '#ffffff', fontSize: '0.875rem' }} to="/launches">
                                    LAUNCHES
                                    </Link>
                            </li>
                            <li className="nav-item" role="presentation">
                                <Link className="nav-link active" style={{ color: '#ffffff', fontSize: '0.875rem' }} to="/rockets">
                                    ROCKETS
                                    </Link>
                            </li>
                            <li className="nav-item" role="presentation">
                                <Link className="nav-link active" style={{ color: '#ffffff', fontSize: '0.875rem' }} to="/about">
                                    ABOUT</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;