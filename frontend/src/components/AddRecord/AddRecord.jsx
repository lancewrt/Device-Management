import React, { useEffect, useState } from 'react';
import './AddRecord.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Button, Form, Card, Pagination } from "react-bootstrap";
import { Plus, ThreeDotsVertical, ArrowRight, ArrowLeft } from "react-bootstrap-icons";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import NavBar from '../NavBar/NavBar';

const AddRecord = () => {
    const [errors, setErrors] = useState({});
    const [departments, setDepartments] = useState([]);
    const [businessUnits, setBusinessUnits] = useState([]);
    const [locations, setLocations] = useState([]);
    const [designations, setDesignations] = useState([]);
    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        mi: '',
        department: 'Open this select menu',
        designation: 'Open this select menu',
        businessUnit: 'Open this select menu',
        location: '',
        releaseDate: '',
        deviceName: '',
        lastDeviceUser: '',
        deviceModel: '',
        serialNumber: '',
        deviceType: 'Open this select menu',
        deviceBrand: 'Open this select menu',
        specification: '',
        notes: '',
        dusername: '',
        dpassword: ''
    });

    useEffect(() => {
        getDepartments();
    }, []);

    const getDepartments = async () => {
        try {
            const response = await axios.get('http://localhost:5000/departments');
            setDepartments(response.data);
        } catch (error) {
            console.error('Error:', error.response?.data || error.message);
            alert('Failed to fetch departments.');
        }
    };



    const handleNextClick = () => {
        // Find the currently active tab and move to the next one
        const activeTab = document.querySelector('#nav-tab .nav-link.active');
        if (activeTab) {
          let nextTab = activeTab.nextElementSibling;
          if (nextTab) {
            nextTab.click();
          }
        }
    };

    const handlePreviousClick = () => {
    const activeTab = document.querySelector('#nav-tab .nav-link.active');
    if (activeTab) {
        const previousTab = activeTab.previousElementSibling;
        if (previousTab) previousTab.click();
    }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit =async (e) => {
        e.preventDefault();
        console.log(formData);

        if (!validateForm()) {
            return; // Stop if validation fails
        }
        
        try {
            const response = await axios.post('http://localhost:5000/addRecord', formData);
            alert(response.data.message);
            Navigate('/');
        } catch (error) {
            console.error('Error:', error.response?.data || error.message);
            alert('Failed to add record.');
        }
    };

    const validateForm = () => {
        let tempErrors = {};
        let isValid = true;
      
        // Required Fields Validation
        if (!formData.fname.trim()) {
            tempErrors.fname = 'First name is required';
            isValid = false;
        }
      
        if (!formData.lname.trim()) {
            tempErrors.lname = 'Last name is required';
            isValid = false;
        }
      
        if (formData.department === 'Open this select menu') {
            tempErrors.department = 'Please select a department';
            isValid = false;
        }

        if (formData.businessUnit === 'Open this select menu') {
            tempErrors.businessUnit = 'Please select a business unit';
            isValid = false;
        }

        if (formData.designation === 'Open this select menu') {
            tempErrors.designation = 'Please select a designation';
            isValid = false;
        }

        if (formData.designation === 'Open this select menu') {
            tempErrors.deviceType = 'Please select a device type';
            isValid = false;
        }

        if (formData.deviceBrand === 'Open this select menu') {
            tempErrors.deviceBrand = 'Please select a device brand';
            isValid = false;
        }
      
        if (formData.deviceName.trim().length < 3) {
          tempErrors.deviceName = 'Device name must be at least 3 characters';
          isValid = false;
        }

        if (!formData.location.trim()) {
            tempErrors.location = 'Location is required';
            isValid = false;
        }

        if (!formData.deviceModel.trim()) {
            tempErrors.deviceModel = 'Device modelis required';
            isValid = false;
        }

        if (!formData.serialNumber.trim()) {
            tempErrors.serialNumber = 'Serial ID is required';
            isValid = false;
        }

        if (!formData.specification.trim()) {
            tempErrors.specification = 'Specification is required';
            isValid = false;
        }

        if (!formData.dusername.trim()) {
            tempErrors.dusername = 'Username is required';
            isValid = false;
        }
      
        // Password Strength Validation
        if (formData.dpassword.length < 6) {
          tempErrors.dpassword = 'Password must be at least 6 characters';
          isValid = false;
        }
      
        setErrors(tempErrors);
        return isValid;
    };
      

    return (
        <div className="d-flex justify-content-center align-items-center top-0">
            <div className="container py-4">
            <NavBar />
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        {/* <h1 className="text-danger fw-bold">All<span className="text-success">Value</span></h1> */}
                    </Link>
                    {/* <Button variant="outline-warning" className="d-flex align-items-center">
                    <Plus className="me-2" /> Add New
                    </Button> */}
                </div>
                <div className="d-flex mb-3">
                    
                </div>
                <h3 className='text-start fw-bold'>Add Record</h3>
                <Card> 
                    <Card.Body>
                    
                    <nav>
                        <div className="nav nav-tabs" id="nav-tab" role="tablist">
                            <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Device Info</button>
                            <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Employee Info</button>
                            <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Notes</button>
                        </div>
                    </nav>
                    
                    <div className="tab-content border-bottom border-start border-end " id="nav-tabContent">
                        <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                            <form className="d-flex justify-content-center">
                                <div className="row mt-3 text-start w-100 ps-3 pe-3 pt-3">
                                    <div className="col-md-5 ">
                                        <label htmlFor="deviceModel" className="form-label">Model</label>
                                        <input type="text" className="form-control" id="deviceModel" name='deviceModel' value={formData.deviceModel} placeholder="Device Model" onChange={handleChange}/>
                                        {errors.deviceModel && <p style={{ color: 'red' }}>{errors.deviceModel}</p>}
                                    </div>
                                    <div className="col-md-4 ">
                                        <label htmlFor="serialId" className="form-label">Serial ID</label>
                                        <input type="text" className="form-control" id="serialNumber" name='serialNumber' value={formData.serialNumber} placeholder="Serial ID" onChange={handleChange}/>
                                        {errors.serialNumber && <p style={{ color: 'red' }}>{errors.serialNumber}</p>}
                                    </div>
                                    <div className="col-md-3 ">
                                        <label htmlFor="serialId" className="form-label">Device Type</label>
                                        <select className="form-select" aria-label="Default select example" id='deviceType' name='deviceType' value={formData.deviceType} onChange={handleChange}>
                                            <option selected disabled>Open this select menu</option>
                                            <option value="LAPTOP">LAPTOP</option>
                                            <option value="DESKTOP">DESKTOP</option>
                                        </select>
                                        {errors.deviceType && <p style={{ color: 'red' }}>{errors.deviceType }</p>}
                                    </div>
                                </div>
                            </form>
                            <form className="d-flex justify-content-center">
                                <div className="row text-start w-100 p-3">
                                    <div className="col-md-5">
                                        <label htmlFor="serialId" className="form-label">Device Brand</label>
                                        <select className="form-select" aria-label="Default select example" id='deviceBrand' name='deviceBrand' value={formData.deviceBrand} onChange={handleChange}>
                                            <option selected disabled>Open this select menu</option>
                                            <option value="LENOVO">LENOVO</option>
                                            <option value="ASUS">ASUS</option>
                                            <option value="HP">HP</option>
                                            <option value="DELL">DELL</option>
                                            <option value="ACER">ACER</option>
                                            <option value="MSI">MSI</option>
                                        </select>
                                        {errors.deviceBrand && <p style={{ color: 'red' }}>{errors.deviceBrand}</p>}
                                    </div>
                                    <div className="col-md-7 ">
                                        <label htmlFor="deviceModel" className="form-label">Specification</label>
                                        <input type="text" className="form-control" id="specification" name='specification' value={formData.specification} placeholder="Device Specification" onChange={handleChange}/>
                                        {errors.specification && <p style={{ color: 'red' }}>{errors.specification}</p>}
                                    </div>
                                </div>
                            </form>
                            <form className="d-flex justify-content-center">
                                <div className="row mb-3 text-start w-100 ps-3 pe-3">
                                    <div className="col-md-5">
                                        <label htmlFor="deviceModel" className="form-label">Device Name</label>
                                        <input type="text" className="form-control" id="deviceName" name='deviceName' value={formData.deviceName} placeholder="Device Name" onChange={handleChange}/>
                                        {errors.deviceName && <p style={{ color: 'red' }}>{errors.deviceName}</p>}
                                    </div>
                                    <div className="col-md-7">
                                        <label htmlFor="serialId" className="form-label">Last Device User</label>
                                        <input type="text" className="form-control" id="lastDeviceUser" name='lastDeviceUser' value={formData.lastDeviceUser} placeholder="Last Device User" onChange={handleChange}/>
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
                                <div className="row mt-3 text-start w-100 pe-3 ps-3 pt-3">
                                    <div className="col-md-5">
                                        <label htmlFor="deviceModel" className="form-label">First Name</label>
                                        <input type="text" className="form-control" id="fname" name='fname' value={formData.fname} placeholder="First Name" onChange={handleChange}/>
                                        {errors.fname && <p style={{ color: 'red' }}>{errors.fname}</p>}
                                    </div>
                                    <div className="col-md-5">
                                        <label htmlFor="serialId" className="form-label">Last Name</label>
                                        <input type="text" className="form-control" id="lname" name='lname' value={formData.lname} placeholder="Last Name" onChange={handleChange}/>
                                        {errors.lname && <p style={{ color: 'red' }}>{errors.lname}</p>}
                                    </div>
                                    <div className="col-md-2">
                                        <label htmlFor="serialId" className="form-label">M.I.</label>
                                        <input type="text" className="form-control" id="mi" name='mi' value={formData.mi} placeholder="Middle Initial" onChange={handleChange}/>
                                    </div>
                                </div>
                            </form>

                            <form className="d-flex justify-content-center">
                                <div className="row text-start w-100 p-3">
                                    <div className="col-md-4 mb-3">
                                        <label htmlFor="serialId" className="form-label">Department</label>
                                        <select className="form-select" aria-label="Default select example" name='department' id='department' value={formData.department} onChange={handleChange}>
                                            {departments.map((department, index) => (
                                                <option key={index} value={department.name}>{department.name}</option>
                                            ))}
                                            {/* <option selected disabled>Open this select menu</option>
                                            <option value="Operations">Operations</option>
                                            <option value="Accounting">Accounting</option>
                                            <option value="Human Resources">Human Resources</option>
                                            <option value="Merchandising">Merchandising</option>
                                            <option value="Business System">Business System</option>
                                            <option value="Marketing">Marketing</option>
                                            <option value="Human Resources">Facilities Management</option>
                                            <option value="Merchandising">Engineering</option>
                                            <option value="Business System">Purchasing</option>
                                            <option value="Marketing">Finance</option>
                                            <option value="Human Resources">Security</option>
                                            <option value="Merchandising">Training</option> */}
                                        </select>
                                        {errors.department && <p style={{ color: 'red' }}>{errors.department}</p>}
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <label htmlFor="serialId" className="form-label">Designation</label>
                                        <select className="form-select" aria-label="Default select example" name='designation' id='designation' value={formData.designation} onChange={handleChange}>
                                            <option selected disabled>Open this select menu</option>
                                            <option value="Operations">Operations</option>
                                            <option value="Accounting">Accounting</option>
                                            <option value="Planning and Inventory">Planning and Inventory</option>
                                            <option value="Training">Training</option>
                                            <option value="Finance">Finance</option>
                                            <option value="SAP">SAP</option>
                                        </select>
                                        {errors.designation && <p style={{ color: 'red' }}>{errors.designation}</p>}
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <label htmlFor="serialId" className="form-label">Business Unit</label>
                                        <select className="form-select" aria-label="Default select example" name='businessUnit' id='businessUnit' value={formData.businessUnit} onChange={handleChange}>
                                            <option selected disabled>Open this select menu</option>
                                            <option value="FAMILY SHOPPERS UNLIMITED, INC. ">FAMILY SHOPPERS UNLIMITED</option>
                                            <option value="ALLHOME CORP<">ALLHOME CORP</option>
                                            <option value="THE VILLAGE SERVER INC.">THE VILLAGE SERVER INC.</option>
                                            <option value="ALLDAY MARTS INC">ALLDAY MARTS INC</option>
                                            <option value="ALLDAY RETAIL CONCEPT STORE">ALLDAY RETAIL CONCEPT STORE</option>
                                            <option value="COFFEE PROJECT">COFFEE PROJECT</option>
                                        </select>
                                        {errors.businessUnit && <p style={{ color: 'red' }}>{errors.businessUnit}</p>}
                                    </div>
                                    
                                    <div className="col-md-8">
                                        <label htmlFor="deviceModel" className="form-label">Location</label>
                                        <input type="text" className="form-control" id="location" name='location' value={formData.location} placeholder="Location" onChange={handleChange}/>
                                        {errors.location && <p style={{ color: 'red' }}>{errors.location}</p>}
                                    </div>
                                    <div className="col-md-4">
                                        <label htmlFor="deviceModel" className="form-label">Release Date</label>
                                        <input type="date" className="form-control" id="releaseDate" name='releaseDate' value={formData.releaseDate} onChange={handleChange}/>
                                    </div>
                                
                                </div>
                            </form>

                            <form className="d-flex justify-content-center">
                                
                            </form>
                            <div className="d-flex justify-content-end mb-3 pe-1">
                                <Button type='button' className="d-flex align-items-center me-4" onClick={handlePreviousClick}>
                                    <ArrowLeft className="me-2" />&nbsp;Prev
                                </Button>
                                <Button type='button' className="d-flex align-items-center me-4" onClick={handleNextClick}>
                                    Next &nbsp;<ArrowRight className="me-2" />
                                </Button>
                            </div>

                        </div>
                        <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                            <form className="d-flex justify-content-center">
                                <div className="row mb-3 text-start w-100 ps-3 pe-3 pt-3">
                                    <div className="col-md-6">
                                        <label htmlFor="deviceModel" className="form-label">Device Username</label>
                                        <input type="text" className="form-control" id="dusername" name='dusername' value={formData.dusername} placeholder="Device Name" onChange={handleChange}/>
                                        {errors.dusername && <p style={{ color: 'red' }}>{errors.dusername}</p>}
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="serialId" className="form-label">Device Password</label>
                                        <input type="text" className="form-control" id="dpassword" name='dpassword' value={formData.dpassword} placeholder="Last Device User" onChange={handleChange}/>
                                        {errors.dpassword && <p style={{ color: 'red' }}>{errors.dpassword}</p>}
                                    </div>
                                </div>
                            </form>
                            <form className="d-flex justify-content-center">
                                <div className="row mb-3 text-start w-100 ps-3 pe-3">
                                    <div className="col-md-12 mb-1   ">
                                        <label htmlFor="deviceModel" className="form-label">Notes (Device condition before releasing)</label>
                                        {/* <input type="text" className="form-control h-75 d-inline-block" id="deviceModel" placeholder="Device Model" h-50 /> */}
                                        <textarea className="form-control" id="notes" name='notes' value={formData.notes} rows="5" onChange={handleChange}></textarea>
                                    </div>
                                    
                                </div>
                            </form>
                            <div className="d-flex justify-content-end mb-3 pe-1">
                                <Button type='button' className="d-flex align-items-center me-4" onClick={handlePreviousClick}>
                                <ArrowLeft className="me-2" />&nbsp;Prev
                                </Button>
                                <Button type='button' className="d-flex align-items-center me-4" onClick={handleSubmit}>
                                    Finish &nbsp;<ArrowRight className="me-2" />
                                </Button>
                                
                            </div>
                        </div>

                        
                    </div>

                    
                    
                    </Card.Body>
                </Card>
            
            </div>
        </div>
    );
};

export default AddRecord;