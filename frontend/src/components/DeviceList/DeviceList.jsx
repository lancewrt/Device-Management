import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Table, Form, Pagination } from 'react-bootstrap';
import { Plus, ThreeDotsVertical } from 'react-bootstrap-icons';
import NavBar from '../NavBar/NavBar';
import { useState } from 'react';

const DeviceList = () => {
    const [search, setSearch] = useState("");
    const [data, setData] = useState([]);   

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
                    <Table striped bordered hover>
                        <thead>
                        <tr className="row text-center">    
                            <th className="col-3">Computer Name</th>
                            <th className="col-2">Serial No.</th>
                            <th className="col-2">Model</th>
                            <th className="col-2">Type</th>
                            <th className="col">Last User</th>
                        </tr>
                        </thead>
                        <tbody>
                        
                        {data.map((item, index) => (
                            <tr key={index}>
                                <td>{item.first_name} {item.last_name}</td>
                                <td>{item.department}</td>
                                <td>{item.designation}</td>
                                <td>{item.device_type}</td>
                                <td>
                                    <button className="btn-sm border-0 border bg-transparent" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <ThreeDotsVertical />
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to={`/view-info/${item.employee_id}`}style={{ textDecoration: 'none' }}>View</Link></li>
                                        <li><Link className="dropdown-item" to={`/edit-info/${item.employee_id}`}style={{ textDecoration: 'none' }}>Edit</Link></li>
                                        
                                    </ul>
                                    
                                    
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                    </Card.Body>
                </Card>
                <div className="d-flex justify-content-end mt-3">
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