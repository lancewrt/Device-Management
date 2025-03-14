import React, { useEffect, useState } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';


const NavBar = () => {
    const [dateTime, setDateTime] = useState(new Date());
    const [isOnline, setIsOnline] = useState(navigator.onLine);
    const [uname, setUname] = useState(null);
   
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = new Date();
    const currentDay = days[today.getDay()];

    useEffect(() => {
        const intervalId = setInterval(() => setDateTime(new Date()), 1000);
    }, []);

    return (
        <div className='pb-4'>

        
            <nav className="navbar">
                <div className="navbar-brand">
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <h1 className="text-danger fw-bold">All<span className="text-success">Value</span></h1>
                    </Link>
                </div>
                <div>
                    <div className="top-navbar-datetime text-black">
                        <span>{dateTime.toLocaleTimeString()}</span>
                        <span>|</span>
                        <span>{currentDay}</span>
                        <span>|</span>
                        <span>{dateTime.toLocaleDateString()}</span>
                    </div>
                </div>
            </nav>

            <nav className="">
                <div>
                    <ul className="nav nav-pills fw-bold">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Assignment</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Laptops</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Employees</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Accountability</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                </div>
            </nav>

            <hr/>

        </div>        
    );
};

export default NavBar;