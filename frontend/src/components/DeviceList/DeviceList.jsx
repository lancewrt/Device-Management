import React, { use } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Card, Table, Form, Pagination } from 'react-bootstrap';
import { Plus, ThreeDotsVertical } from 'react-bootstrap-icons';
import NavBar from '../NavBar/NavBar';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';




const DeviceList = () => {
    const navigate = useNavigate();
    const [search, setSearch] = useState(""); 
    const [device, setDevice] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const limit = 10; // Devices per page

    useEffect(() => {
        getDevices();
    }, [page]);

    const getDevices = async () => {
        try {
            const res = await fetch(`http://localhost:5000/device?page=${page}&limit=${limit}`);
            const jsonData = await res.json();
            setDevice(jsonData.data);
            setTotalPages(Math.ceil(jsonData.total / limit));
        } catch (err) {
            console.error(err.message);
        }
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
        <div className="d-flex justify-content-center align-items-center " style={{margin: "auto"}}>
            {/* <AdminTopNavbar /> */}
            
            <div className="container pb-4" >
                <NavBar />
                
                <div className="d-flex justify-content-end mb-3">
                    <Link to="/add-device" style={{ textDecoration: 'none' }}>
                        <Button variant="outline-danger" className="d-flex align-items-center me-4">
                            <Plus className="me-2" /> Add Device
                        </Button>
                    </Link>
                    
                </div>
                <div className="d-flex justify-content-start mb-3">
                    <Form.Control type="text" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} className="me-2 w-50" />
                    <Button variant="primary" className="ps-4 pe-4">Search</Button>
                </div>
                <div>
                    <Card className="border-0">
                        <Card.Body className="border-0">
                            <div className='' style={{height: '50vh', width: '100%', display: 'inline-block'}}>

                            
                                <table className='table table-striped table-bordered table-hover' >
                                    <thead>
                                    <tr className="row text-center">    
                                        <th className="col-3">Computer Name</th>
                                        <th className="col-2">Serial No.</th>
                                        <th className="col-2">Model</th>
                                        <th className="col-2">Type</th>
                                        <th className="col">Last User</th>
                                    </tr>
                                    </thead>
                                    <tbody className='overflow-auto' style={{height: '50vh'}}>
                                    {Array.isArray(device) && device.length > 0 ? (
                                        device.map((item, index) => (
                                                <tr className="row text-center" key={index} onClick={() => navigate(`/device-info/${item.device_id}`)}>

                                                        <td className="col-3">{item.computer_name}</td>
                                                        <td className="col-2">{item.serial_number}</td>
                                                        <td className="col-2">{item.model}</td>
                                                        <td className="col-2">{item.device_type}</td>
                                                        <td className="col">{item.last_device_user}</td>
                                                
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

export default DeviceList;