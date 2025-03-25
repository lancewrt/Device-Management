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
    const [data, setData] = useState([]);   
    const [device, setDevice] = useState([]);

    useEffect(() => {
        getDevices();
    }, []);

    const getDevices = async () => {
        try {
            const res = await fetch('http://localhost:5000/device');
            const jsonData = await res.json();
            setDevice(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center top-0" style={{margin: "auto"}}>
            {/* <AdminTopNavbar /> */}
            
            <div className="container py-4" style={{height: "100vh"}}>
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
                <Card className="border-0">
                    <Card.Body className="border-0">
                        <div className='overflow-auto' style={{height: '50vh', width: '100%'}}>

                        
                            <Table striped bordered hover >
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
                                    
                                    {device.map((item, index) => (
                                            <tr className="row text-center" key={index} onClick={() => navigate(`/device-info/${item.device_id}`)}>

                                                    <td className="col-3">{item.computer_name}</td>
                                                    <td className="col-2">{item.serial_number}</td>
                                                    <td className="col-2">{item.model}</td>
                                                    <td className="col-2">{item.device_type}</td>
                                                    <td className="col">{item.last_device_user}</td>
                                            
                                            </tr>
                                        
                                    ))}
                                
                                </tbody>
                            </Table>
                        </div>
                    </Card.Body>
                    
                </Card>
                <div className="d-flex justify-content-end mt-3">
                {/*     <Link to={`/device-info/${item.device_id}`} style={{ textDecoration: 'none' }}> </Link> */}
                    <Pagination>
                        <Pagination.Prev />
                        <Pagination.Item active>{1}</Pagination.Item>
                        <Pagination.Item>{2}</Pagination.Item>
                        <Pagination.Next />
                    </Pagination>
                </div>
            </div>
        </div>
    );
};

export default DeviceList;