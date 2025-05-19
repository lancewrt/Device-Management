import React, { useState, useEffect } from "react";
import './ViewAll.css';
import { Link, useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Button, Form, Card, Pagination } from "react-bootstrap";
import { Plus, ThreeDotsVertical } from "react-bootstrap-icons";
import axios from "axios";
import NavBar from "../NavBar/NavBar";  

  

const ViewAll = () => {
    const navigate = useNavigate();
    const [search, setSearch] = useState(""); 
    const [device, setDevice] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const limit = 10; // Devices per page

    /* useEffect(() => {
        getDevices();
    }, [page]);

    const getDevices = async () => {
        try {
            const res = await fetch(`http://localhost:5000/assigned-device?page=${page}&limit=${limit}`);
            const jsonData = await res.json();
            setDevice(jsonData.data);
            console.log(jsonData.data)
            setTotalPages(Math.ceil(jsonData.total / limit));
        } catch (err) {
            console.error(err.message);
        }
    }; */

    useEffect(() => {
        const delayDebounce = setTimeout(() => {
            getDevices();
        }, 500); // Debounce API call (wait 500ms after last keystroke)

        return () => clearTimeout(delayDebounce); // Cleanup function
    }, [search, page]); // Fetch when search or page changes

    const getDevices = async () => {
        try {
            const query = new URLSearchParams({ page, limit, search }).toString();
            const res = await fetch(`http://localhost:5000/assigned-device?${query}`);
            const jsonData = await res.json();
            
            setDevice(jsonData.data);
            setTotalPages(Math.ceil(jsonData.total / limit));
        } catch (err) {
            console.error(err.message);
        }
    };

    const handleReset = () => {
        setSearch("");
        setPage(1);
    };

    const getPaginationItems = () => {
        let items = [];
        const maxPagesToShow = 5; // Show 5 pages max at a time

        if (totalPages <= maxPagesToShow) {
            for (let i = 1; i <= totalPages; i++) {
                items.push(i);
            }
        } else {
            if (page <= 3) {
                items = [1, 2, 3, '...', totalPages];
            } else if (page >= totalPages - 2) {
                items = [1, '...', totalPages - 2, totalPages - 1, totalPages];
            } else {
                items = [1, '...', page - 1, page, page + 1, '...', totalPages];
            }
        }
        return items;
    };
    return (
        <div className="d-flex justify-content-center align-items-center w-100 min-vh-100" style={{margin: "auto"}}>
            {/* <AdminTopNavbar /> */}
            
            <div className="bg-white w-100 row" >
                <div className='col-2 p-0'>
                    <NavBar />
                </div>
                <div className='col p-5 mt-5'>
                    <div className="d-flex justify-content-end mb-3">
                        <Link to="/add-record" style={{ textDecoration: 'none' }}>
                            <Button variant="outline-secondary" className="d-flex align-items-center me-4">
                                <Plus className="me-2" /> Releasing
                            </Button>
                        </Link>  
                    </div>
                    <div className="d-flex justify-content-start mb-2 ms-2">
                        <Form.Control 
                            type="text" 
                            placeholder="Search first or last name..." 
                            value={search} 
                            onChange={(e) => setSearch(e.target.value)} 
                            className="me-2 w-50" 
                        />
                            
                        <Button variant="outline-secondary" className="ps-4 pe-4">Search</Button>
                        <Button variant="secondary" className="ps-4 pe-4 ms-2" onClick={handleReset}>Reset</Button>
                    </div>
                    <Card className="border-0">
                        <Card.Body className="border-0">
                        <div className='' style={{height: '50vh', width: '100%', display: 'inline-block'}}>
                        <table className='table  table-hover' >
                            <thead>
                                <tr className="row text-center">    
                                    <th className="col">Name</th>
                                    <th className="col">Department</th>
                                    <th className="col">Business Unit</th>
                                    <th className="col">Device Name</th>
                                    <th className="col">Serial Number</th>
                                </tr>
                            </thead>
                            <tbody className='overflow-auto' style={{height: '50vh'}}>
                                {Array.isArray(device) && device.length > 0 ? (
                                    device.map((item, index) => (
                                            <tr className="row text-center" key={index} onClick={() => navigate(`/device-info/${item.device_id}`)}>

                                                    <td className="col">{item.fname} {item.lname}</td>
                                                    <td className="col">{item.dept_name}</td>
                                                    <td className="col">{item.bu_name}</td>
                                                    <td className="col">{item.computer_name}</td>
                                                    <td className="col word-wrap">{item.serial_number}</td>
                                            </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="5" className="text-center">No devices found.</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                        <div className="d-flex justify-content-end mt-3">                    
                            <Pagination>
                                <Pagination.Prev disabled={page === 1} onClick={() => setPage(page - 1)} />

                                {getPaginationItems().map((item, index) =>
                                    item === '...' ? (
                                        <Pagination.Ellipsis key={index} />
                                    ) : (
                                        <Pagination.Item
                                            key={index}
                                            active={item === page}
                                            onClick={() => setPage(item)}
                                        >
                                            {item}
                                        </Pagination.Item>
                                    )
                                )}

                                <Pagination.Next disabled={page === totalPages} onClick={() => setPage(page + 1)} />
                            </Pagination>
                        </div>
                        </div>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default ViewAll;