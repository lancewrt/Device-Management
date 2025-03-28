import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    const [dateTime, setDateTime] = useState(new Date());
    const location = useLocation();

    useEffect(() => {
        const intervalId = setInterval(() => setDateTime(new Date()), 1000);
        return () => clearInterval(intervalId);
    }, []);

    const navItems = [
        { paths: ["/", "/add-record"], label: "Assignment" },
        { paths: ["/devices", "/add-device", "/device-info"], label: "Devices", dynamic: "/device-info/" },
    ];

    return (
        <div className='pb-4'>
            <nav className="navbar">
                <div className="navbar-brand">
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <h1 className="text-primary fw-bold">Lance<span className="text-success">Bernal</span></h1>
                    </Link>
                </div>
                <div>
                    <div className="top-navbar-datetime text-black">
                        <span>{dateTime.toLocaleTimeString()}</span>
                        <span>|</span>
                        <span>{dateTime.toLocaleDateString()}</span>
                    </div>
                </div>
            </nav>

            <nav>
                <ul className="nav nav-pills">
                    {navItems.map((item) => {
                        const isActive = item.paths.includes(location.pathname) || 
                                         (item.dynamic && location.pathname.startsWith(item.dynamic));

                        return (
                            <li className="nav-item" key={item.paths[0]}>
                                <Link 
                                    className={`nav-link ${isActive ? 'active' : ''}`}
                                    to={item.paths[0]}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>

            <hr/>
        </div>
    );
};

export default NavBar;
