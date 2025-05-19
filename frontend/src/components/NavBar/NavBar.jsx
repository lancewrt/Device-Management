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
        //{ paths: ["/turn-over"], label: "Turn Over" },
    ];

    return (
        <nav className='bg-white h-100 w-100 p-5 d-flex flex-column align-items-start border-end'>
            <Link to="/" style={{ textDecoration: 'none' }}>
                <h1 className="text-danger fw-bold">All<span className="text-success">Value</span></h1>
            </Link>
                
                <ul className='w-100 m-0 p-0'>
                    {navItems.map((item) => {
                        const isActive = item.paths.includes(location.pathname) || 
                                         (item.dynamic && location.pathname.startsWith(item.dynamic));

                        return (
                            <li className="list-unstyled pb-2" key={item.paths[0]}>
                                <Link 
                                    className={`nav-link fs-5 ${isActive ? 'active' : ''}`}
                                    to={item.paths[0]}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
           
        </nav>
    );
};

export default NavBar;
