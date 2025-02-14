import React, { useState } from 'react';
import './AddRecord.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Button, Form, Card, Pagination } from "react-bootstrap";
import { Plus, ThreeDotsVertical, ArrowRight } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const AddRecord = () => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        date: ''
    });

    const handleNextClick = () => {
        // Find the currently active tab and move to the next one
        const activeTab = document.querySelector('.nav-link.active');
        if (activeTab) {
          let nextTab = activeTab.nextElementSibling;
          if (nextTab) {
            nextTab.click();
          }
        }
      };

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
                        <div className="nav nav-tabs" id="nav-tab" role="tablist">
                            <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Device Info</button>
                            <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Employee Info</button>
                            <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Remarks</button>
                        </div>
                    </nav>
                    
                    <div className="tab-content border-bottom" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                            <form className="d-flex justify-content-center">
                                <div className="row mt-3 text-start w-100 p-3">
                                    <div className="col-md-5 ">
                                        <label htmlFor="deviceModel" className="form-label">Model</label>
                                        <input type="text" className="form-control" id="deviceModel" placeholder="Device Model" />
                                    </div>
                                    <div className="col-md-5 ">
                                        <label htmlFor="serialId" className="form-label">Serial ID</label>
                                        <input type="text" className="form-control" id="serialId" placeholder="Serial ID" />
                                    </div>
                                    <div className="col-md-2 ">
                                        <label htmlFor="serialId" className="form-label">Device Type</label>
                                        <select class="form-select" aria-label="Default select example">
                                            <option selected disabled>Open this select menu</option>
                                            <option value="LAPTOP">LAPTOP</option>
                                            <option value="DESKTOP">DESKTOP</option>
                                        </select>
                                    </div>
                                
                                </div>
                            </form>
                            <form className="d-flex justify-content-center">
                                <div className="row text-start w-100 p-3">
                                    <div className="col-md-2 mb-2">
                                        <label htmlFor="serialId" className="form-label">Device Brand</label>
                                        <select class="form-select" aria-label="Default select example">
                                            <option selected disabled>Open this select menu</option>
                                            <option value="LENOVO">LENOVO</option>
                                            <option value="ASUS">ASUS</option>
                                            <option value="HP">HP</option>
                                            <option value="DELL">DELL</option>
                                            <option value="ACER">ACER</option>
                                            <option value="MSI">MSI</option>
                                        </select>
                                    </div>
                                    <div className="col-md-10 mb-2">
                                        <label htmlFor="deviceModel" className="form-label">Specification</label>
                                        <input type="text" className="form-control" id="deviceModel" placeholder="Device Specification" />
                                    </div>
                                </div>
                            </form>
                            <div className="d-flex justify-content-end mb-3 pe-1">
                                <Button type='button' className="d-flex align-items-center me-4" onClick={handleNextClick}>
                                    Next &nbsp;<ArrowRight className="me-2" />
                                </Button>
                            </div>
                        </div>

                        <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                            <form className="d-flex justify-content-center">
                                <div className="row mt-3 text-start w-100 p-3">
                                    <div className="col-md-5">
                                        <label htmlFor="deviceModel" className="form-label">First Name</label>
                                        <input type="text" className="form-control" id="deviceModel" placeholder="First Name" />
                                    </div>
                                    <div className="col-md-5">
                                        <label htmlFor="serialId" className="form-label">Last Name</label>
                                        <input type="text" className="form-control" id="serialId" placeholder="Last Name" />
                                    </div>
                                    <div className="col-md-2">
                                        <label htmlFor="serialId" className="form-label">M.I.</label>
                                        <input type="text" className="form-control" id="serialId" placeholder="Middle Initial" />
                                    </div>
                                </div>
                            </form>

                            <form className="d-flex justify-content-center">
                                <div className="row text-start w-100 p-3">
                                    <div className="col-md-4">
                                        <label htmlFor="serialId" className="form-label">Department</label>
                                        <select class="form-select" aria-label="Default select example">
                                            <option selected disabled>Open this select menu</option>
                                            <option value="Operations">Operations</option>
                                            <option value="ASUS">Accounting</option>
                                            <option value="Human Resources">Human Resources</option>
                                            <option value="Merchandising">Merchandising</option>
                                            <option value="Business System">Business System</option>
                                            <option value="Marketing">Marketing</option>
                                            <option value="Human Resources">Facilities Management</option>
                                            <option value="Merchandising">Engineering</option>
                                            <option value="Business System">Purchasing</option>
                                            <option value="Marketing">Finance</option>
                                            <option value="Human Resources">Security</option>
                                            <option value="Merchandising">Training</option>
                                        </select>
                                    </div>
                                    <div className="col-md-4">
                                        <label htmlFor="serialId" className="form-label">Designation</label>
                                        <select class="form-select" aria-label="Default select example">
                                            <option selected disabled>Open this select menu</option>
                                            <option value="Operations">Operations</option>
                                            <option value="Accounting">Accounting</option>
                                            <option value="Planning and Inventory">Planning and Inventory</option>
                                            <option value="Training">Training</option>
                                            <option value="Finance">Finance</option>
                                            <option value="SAP">SAP</option>
                                        </select>
                                    </div>
                                    <div className="col-md-4">
                                        <label htmlFor="serialId" className="form-label">Business Unit</label>
                                        <select class="form-select" aria-label="Default select example">
                                            <option selected disabled>Open this select menu</option>
                                            <option value="FAMILY SHOPPERS UNLIMITED">FAMILY SHOPPERS UNLIMITED</option>
                                            <option value="ALLHOME CORP<">ALLHOME CORP</option>
                                            <option value="THE VILLAGE SERVER INC.">THE VILLAGE SERVER INC.</option>
                                            <option value="ALLDAY MARTS INC">ALLDAY MARTS INC</option>
                                            <option value="ALLDAY RETAIL CONCEPT STORE">ALLDAY RETAIL CONCEPT STORE</option>
                                            <option value="COFFEE PROJECT">COFFEE PROJECT</option>
                                        </select>
                                    </div>
                                    
                                    <div className="col-md-12">
                                        <label htmlFor="deviceModel" className="form-label">Location</label>
                                        <input type="text" className="form-control" id="deviceModel" placeholder="Location" />
                                    </div>
                                
                                </div>
                            </form>

                            <form className="d-flex justify-content-center">
                                
                            </form>
                            <div className="d-flex justify-content-end mb-3 pe-1">
                                <Button type='button' className="d-flex align-items-center me-4" onClick={handleNextClick}>
                                    Next &nbsp;<ArrowRight className="me-2" />
                                </Button>
                            </div>

                        </div>
                        <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                            <form className="d-flex justify-content-center">
                                <div className="row mt-3 text-start w-100 p-3">
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="deviceModel" className="form-label">Model</label>
                                        <input type="text" className="form-control" id="deviceModel" placeholder="Device Model" />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="serialId" className="form-label">Serial ID</label>
                                        <input type="text" className="form-control" id="serialId" placeholder="Serial ID" />
                                    </div>
                                </div>
                            </form>
                        </div>

                        
                    </div>

                    
                    
                    </Card.Body>
                </Card>
            
            </div>
        </div>
    );
};

export default AddRecord;