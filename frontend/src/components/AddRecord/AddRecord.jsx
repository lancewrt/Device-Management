import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Button, Form, Card, Pagination } from "react-bootstrap";
import { Plus, ThreeDotsVertical } from "react-bootstrap-icons";


const AddRecord = () => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        date: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="container py-4">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h1 className="text-danger fw-bold">All<span className="text-success">Value</span></h1>
                    {/* <Button variant="outline-warning" className="d-flex align-items-center">
                    <Plus className="me-2" /> Add New
                    </Button> */}
                </div>
                <div className="d-flex mb-3">
                    
                </div>
                <h3 className='text-start fw-bold'>Add Record</h3>
                <Card>
                    <Card.Body>
                    {/* <ul class="nav nav-tabs">
                        <li class="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Device Info</a>
                        </li>
                        <li class="nav-item">
                            <a className="nav-link" href="#">Employee Info</a>
                        </li>
                        <li className="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                        </li>
                    </ul> */}
                    <nav>
                        <div class="nav nav-tabs" id="nav-tab" role="tablist">
                            <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Device Info</button>
                            <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Employee Info</button>
                            <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Remarks</button>
                        </div>
                    </nav>
                    <div class="tab-content" id="nav-tabContent">
                        <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                        
                        {/* <Table striped bordered hover>
                            <thead>
                            <tr>
                                <th>Validation</th>
                                <th>Department</th>
                                <th>Designation</th>
                                <th>Device Type</th>
                                <th>Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Juan Dela Cruz</td>
                                <td>IT dept</td>
                                <td>Technical</td>
                                <td>Laptop</td>
                                <td><ThreeDotsVertical /></td>
                            </tr>
                            
                            </tbody>
                        </Table> */}
                        </div>
                        <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">...</div>
                        <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">...</div>
                    </div>
                    
                    </Card.Body>
                </Card>
            
            </div>
        </div>
    );
};

export default AddRecord;