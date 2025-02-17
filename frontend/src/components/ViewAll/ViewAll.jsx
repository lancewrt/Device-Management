import React, { useState, useEffect } from "react";
import './ViewAll.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Button, Form, Card, Pagination } from "react-bootstrap";
import { Plus, ThreeDotsVertical } from "react-bootstrap-icons";
import axios from "axios";
import { Link } from "react-router-dom";


/* const data = [
    { id: "#B-10021-31", title: "The Happiness Hypothesis", author: "Jonathan Haidt", count: 2 },
    { id: "#B-10021-32", title: "The Art of Happiness", author: "Jonathan Haidt", count: 2 },
    { id: "#B-10021-32", title: "The Happiness Hypothesis", author: "Jonathan Haidt", count: 2 },
    { id: "#B-10021-32", title: "The Happiness Hypothesis", author: "Jonathan Haidt", count: 2 },
  ]; */
  

const ViewAll = () => {
    const [search, setSearch] = useState("");
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/employees')
            .then(response => setData(response.data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);
    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            {/* <AdminTopNavbar /> */}
            
            <div className="container py-4">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h1 className="text-danger fw-bold">All<span className="text-success">Value</span></h1>
                </div>
                <div className="d-flex justify-content-end mb-3">
                    <Link to="/add-record" style={{ textDecoration: 'none' }}>
                        <Button variant="outline-danger" className="d-flex align-items-center me-4">
                            <Plus className="me-2" /> Releasing
                        </Button>
                    </Link>
                    
                    <Button variant="outline-success" className="d-flex align-items-center">
                        <Plus className="me-2" /> Turn Over
                    </Button>
                </div>
                <div className="d-flex justify-content-start mb-3">
                    <Form.Control type="text" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} className="me-2 w-50" />
                    <Button variant="primary" className="ps-4 pe-4">Search</Button>
                </div>
                <Card>
                    <Card.Body>
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Department</th>
                            <th>Designation</th>
                            <th>Device Type</th>
                            <th>Actions</th>
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
                                    <button class="btn-sm border-0 border bg-transparent" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <ThreeDotsVertical />
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">View</a></li>
                                        <li><a class="dropdown-item" href="#">Edit</a></li>
                                        
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

export default ViewAll;