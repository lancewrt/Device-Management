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
        { paths: ["/employees", "/staff"], label: "Employees" },
        { paths: ["/devices", "/add-device"], label: "Devices" },
        { paths: ["/accountability", "/responsibility"], label: "Accountability" }
    ];

    return (
        <div className='pb-4'>
            <nav className="navbar">
                <div className="navbar-brand">
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        {/* <h1 className="text-danger fw-bold">All<span className="text-success">Value</span></h1> */}
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
                <ul className="nav nav-pills " >
                    {navItems.map((item) => (
                        <li className="nav-item" key={item.paths[0]} style={{color: 'black'}}>
                            <Link 
                                className={`nav-link ${item.paths.includes(location.pathname) ? 'active' : ''}`}
                                to={item.paths[0]}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            <hr/>
        </div>
    );
};

export default NavBar;
