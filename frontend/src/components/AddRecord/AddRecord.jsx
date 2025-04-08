import React, { useEffect, useState } from 'react';
import './AddRecord.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Button, Form, Card, Pagination } from "react-bootstrap";
import { Plus, ThreeDotsVertical, ArrowRight, ArrowLeft } from "react-bootstrap-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import NavBar from '../NavBar/NavBar';
import AutoSuggestInput from './AutoSuggestInput';



const AddRecord = () => {
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const [departments, setDepartments] = useState([]);
    const [business_units, setbusiness_units] = useState([]);
    const [locations, setLocations] = useState([]);
    const [designations, setDesignations] = useState([]);
    const [availableDevice, setAvailableDevice] = useState([]);
    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        mi: '',
        phone_no: '',
        email: '',
        emp_status: '',
        department: '',
        designation: '',
        business_unit: '',
        location: '',

        computer_name: '',
        model: '',
        serial_number: '',
        device_type: 'Select an option',
        brand: 'Select an option',
        specs: '',
        remarks: '',
        status: 'Select an option',
        last_device_user: '',
        
        acc_username: '',
        acc_password: '',
        requestor: ''
    });

    useEffect(() => {
        getDepartments();
        getDesignation();
        getbusiness_unit();
        getLocation();
        getAvailableDevice()
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

    const getDesignation = async () => {
        try {
            const response = await axios.get('http://localhost:5000/designation');
            setDesignations(response.data);
        } catch (error) {
            console.error('Error:', error.response?.data || error.message);
            alert('Failed to fetch departments.');
        }
    };

    const getbusiness_unit = async () => {
        try {
            const response = await axios.get('http://localhost:5000/business_unit');
            setbusiness_units(response.data);
        } catch (error) {
            console.error('Error:', error.response?.data || error.message);
            alert('Failed to fetch departments.');
        }
    };

    const getLocation = async () => {
        try {
            const response = await axios.get('http://localhost:5000/location');
            setLocations(response.data);
        } catch (error) {
            console.error('Error:', error.response?.data || error.message);
            alert('Failed to fetch departments.');
        }
    };

   /*  const getAvailableDevice = async () => {
        try{
            const response = await axios.get('http://localhost:5000/available-device')
            setAvailableDevice(response.data);
            console.log(response.data)
        } catch (error) {
            console.error('Error: ', error.response?.data || error.message);
            alert('Failed to fetch available devices')
        }

    }; */

    const getAvailableDevice = async (serial) => {
        if (!serial) {
            setAvailableDevice([]); // Clear suggestions if input is empty
            return;
        }
    
        try {
            const response = await axios.get(`http://localhost:5000/available-device?serial=${serial}`);
            setAvailableDevice(response.data);
        } catch (error) {
            console.error('Error: ', error.response?.data || error.message);
            setAvailableDevice([]); // Clear on error
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
        if (name === "serial_number") {
            getAvailableDevice(value); // Fetch available devices while typing
        }
    };

    const handleSubmit =async (e) => {
        e.preventDefault();
        console.log(formData);

        if (!validateForm()) {
            return; // Stop if validation fails
        }
        
        try {
            const response = await axios.post('http://localhost:5000/add-entry', formData);
            
            alert('Entry added successfully!');
            
            // Navigate to the device details page
            navigate(`/device-info/${response.data.device_id}`);
        } catch (error) {
            console.error('Error adding entry:', error);
            alert('Failed to add entry');
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

            if (formData.business_unit === 'Open this select menu') {
                tempErrors.business_unit = 'Please select a business unit';
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

            if (formData.brand === 'Open this select menu') {
                tempErrors.brand = 'Please select a device brand';
                isValid = false;
            }
        
            if (formData.computer_name.trim().length < 3) {
            tempErrors.computer_name = 'Device name must be at least 3 characters';
            isValid = false;
            }

            if (!formData.location.trim()) {
                tempErrors.location = 'Location is required';
                isValid = false;
            }

            if (!formData.model.trim()) {
                tempErrors.model = 'Device modelis required';
                isValid = false;
            }

            if (!formData.serial_number.trim()) {
                tempErrors.serial_number = 'Serial ID is required';
                isValid = false;
            }

            if (!formData.specs.trim()) {
                tempErrors.specs = 'Specification is required';
                isValid = false;
            }

            if (!formData.acc_username.trim()) {
                tempErrors.acc_username = 'Username is required';
                isValid = false;
            }
        
            // Password Strength Validation
            if (formData.acc_password.length < 6) {
            tempErrors.acc_password = 'Password must be at least 6 characters';
            isValid = false;
            }
        
            setErrors(tempErrors);
            return isValid;
        };
      

    return (
        <div className="d-flex justify-content-center align-items-center" style={{margin: "auto"}}>
            <div className="container pb-4" >
            <NavBar />
            <div className="d-flex justify-content-start ms-3">
                <Button variant="outline-dark" className="d-flex align-items-center border-0 " onClick={() => navigate(-1)}>
                    <FontAwesomeIcon icon={faArrowLeft} size='xl' className='d-flex justify-content-left border-0 pe-2 text-decoration-underline'/> Back
                </Button>
            </div>
                <div className="d-flex justify-content-between align-items-center ms-3">
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        {/* <h1 className="text-danger fw-bold">All<span className="text-success">Value</span></h1> */}
                    </Link>
                    {/* <Button variant="outline-warning" className="d-flex align-items-center">
                    <Plus className="me-2" /> Add New
                    </Button> */}
                </div>
                
                <h2 className='text-center fw-bold pb-2 pt-3'>Assign Device </h2>

                <Card> 
                    <Card.Body>
                    
                        <nav>
                            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Employee Info</button>
                                <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Device Info</button>
                                <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Remarks</button>
                            </div>
                        </nav>
                    
                        <div className="tab-content border-bottom border-start border-end " id="nav-tabContent">
                            <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                <form className="d-flex justify-content-center">
                                    <div className="row mt-3 text-start w-100 pe-3 ps-3 pt-3">
                                        <div className="col-md-5">
                                            <label htmlFor="model" className="form-label">First Name</label>
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
                                    <div className="row mt-3 text-start w-100 pe-3 ps-3">
                                        <div className="col-md-4">
                                            <label htmlFor="model" className="form-label">Phone No.</label>
                                            <input type="text" className="form-control" id="phone_no" name='phone_no' value={formData.phone_no} placeholder="Phone Number" onChange={handleChange}/>
                                        
                                        </div>
                                        <div className="col-md-4">
                                            <label htmlFor="serialId" className="form-label">E-mail</label>
                                            <input type="text" className="form-control" id="email" name='email' value={formData.email} placeholder="Email" onChange={handleChange}/>
                                            
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <AutoSuggestInput
                                                    label="Location"
                                                    name="loc"
                                                    value={formData.location}
                                                    setFormData={setFormData}
                                                    error={errors.location && <p style={{ color: 'red' }}>{errors.location}</p>}
                                                    endpoint="location"
                                            />
                                        </div>
                                    </div>
                                </form>


                                <form className="d-flex justify-content-center">
                                    <div className="row text-start w-100 ps-3 pe-3 pb-3">
                                        <div className="col-md-4 mb-3">
                                            <AutoSuggestInput
                                                    label="Department"
                                                    name="dept"
                                                    value={formData.department}
                                                    setFormData={setFormData}
                                                    error={errors.department && <p style={{ color: 'red' }}>{errors.department}</p>}
                                                    endpoint="department"
                                            />
                                
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <AutoSuggestInput
                                                    label="Designation"
                                                    name="des"
                                                    value={formData.designation}
                                                    setFormData={setFormData}
                                                    error={errors.designation && <p style={{ color: 'red' }}>{errors.designation}</p>}
                                                    endpoint="designation"
                                            />
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <AutoSuggestInput
                                                    label="Business Unit"
                                                    name="bu"
                                                    value={formData.business_unit}
                                                    setFormData={setFormData}
                                                    error={errors.business_unit && <p style={{ color: 'red' }}>{errors.business_unit}</p>}
                                                    endpoint="business_unit"
                                            />
                                        </div>
 
                                        <div className="col-md-12">
                                            <label htmlFor="emp_status" className="form-label">Employment Status</label>
                                            <input type="text" className="form-control" id="emp_status" name='emp_status' value={formData.emp_status} placeholder="Employment Status" onChange={handleChange}/>
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
                            
                                <div className="row mt-3 text-start w-100 ps-3 pe-3 pt-3">

                                

                                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="modal-dialog modal-dialog-centered modal-lg">
                                            <div class="modal-content">
                                            <div class="modal-header">
                                                <h1 class="modal-title fs-5" id="exampleModalLabel">Available Device</h1>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                                {/* <label className="form-label">Enter Serial Number</label>
                                                <input type="text" className="form-control" id="serial_number" name='serial_number' value={formData.serial_number} placeholder="Enter serial number" onChange={handleChange}/> */}
                                                <input 
                                                    type="text" 
                                                    className="form-control" 
                                                    id="serial_number" 
                                                    name="serial_number" 
                                                    value={formData.serial_number} 
                                                    placeholder="Enter serial number" 
                                                    onChange={handleChange}
                                                />
                                                {/* Show available device suggestions */}
                                                {availableDevice.length > 0 && (
                                                    <ul className="list-group mt-0">
                                                        {availableDevice.map((device) => (
                                                            <li 
                                                                key={device.device_id} 
                                                                data-bs-dismiss="modal"
                                                                className="list-group-item list-group-item-action" 
                                                                onClick={() => {setFormData({ ...formData,  serial_number: device.serial_number, 
                                                                                                            computer_name: device.computer_name,
                                                                                                            model: device.model,
                                                                                                            device_type: device.device_type,
                                                                                                            brand: device.brand,
                                                                                                            specs: device.specs,
                                                                                                            remarks: device.remarks,
                                                                                                            status: device.status,
                                                                                                            last_device_user: device.last_device_user })}}
                                                                style={{ cursor: "pointer" }}
                                                            >
                                                                {device.serial_number} - {device.model} ({device.brand})
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-center mb-1'>
                                        <button type="button" className="btn btn-outline-primary w-50 " data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            Select a device
                                        </button>
                                        
                                    </div>
                                    <p className='fw-light fst-italic text-center'>Or type in manually</p>

                                    
                                    
                                    <div className="col-md-4">
                                        <label htmlFor="computer_name" className="form-label">Computer Name</label>
                                        <input type="text" className="form-control" id="computer_name" name='computer_name' value={formData.computer_name} placeholder="Computer Name" onChange={handleChange}/>
                                        {errors.computer_name && <p style={{ color: 'red' }}>{errors.computer_name}</p>}
                                    </div>
                                    <div className="col-md-4 ">
                                        <label htmlFor="model" className="form-label">Model</label>
                                        <input type="text" className="form-control" id="model" name='model' value={formData.model} placeholder="Device Model" onChange={handleChange}/>
                                        {errors.model && <p style={{ color: 'red' }}>{errors.model}</p>}
                                    </div>
                                    <div className="col-md-4 ">
                                        <label htmlFor="serial_number" className="form-label">Serial Number</label>
                                        <input type="text" className="form-control" id="serial_number" name='serial_number' value={formData.serial_number} placeholder="Serial ID" onChange={handleChange}/>
                                        {errors.serial_number && <p style={{ color: 'red' }}>{errors.serial_number}</p>}
                                    </div>
                                    
                                </div>
                            </form>
                            <form className="d-flex justify-content-center">
                                <div className="row text-start w-100 p-3">
                                    <div className="col-md-6 ">
                                        <label htmlFor="device_type" className="form-label">Device Type</label>
                                        <select className="form-select" aria-label="Default select example" id='device_type' name='device_type' value={formData.device_type} onChange={handleChange}>
                                            <option selected disabled>Select an option</option>
                                            <option value="LAPTOP">LAPTOP</option>
                                            <option value="DESKTOP">DESKTOP</option>
                                        </select>
                                        {errors.device_type && <p style={{ color: 'red' }}>{errors.device_type }</p>}
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="brand" className="form-label">Device Brand</label>
                                        <select className="form-select" aria-label="Default select example" id='brand' name='brand' value={formData.brand} onChange={handleChange}>
                                            <option selected disabled>Select an option</option>
                                            <option value="LENOVO">LENOVO</option>
                                            <option value="ASUS">ASUS</option>
                                            <option value="HP">HP</option>
                                            <option value="DELL">DELL</option>
                                            <option value="ACER">ACER</option>
                                            <option value="MSI">MSI</option>
                                        </select>
                                        {errors.brand && <p style={{ color: 'red' }}>{errors.brand}</p>}
                                    </div>
                                    
                                </div>
                            </form>
                            <form className="d-flex justify-content-center">
                                   
                                <div className="row mb-3 text-start w-100 ps-3 pe-3">
                                    <div className="col-md-6 ">
                                        <label htmlFor="specs" className="form-label">Specification</label>
                                        <textarea type="text" className="form-control" id="specs" name='specs' value={formData.specs} placeholder="Device Specification" onChange={handleChange} rows='3'/>
                                        {errors.specs && <p style={{ color: 'red' }}>{errors.specs}</p>}
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="remarks" className="form-label">Remarks</label>
                                        <textarea type="text" className="form-control" id="remarks" name='remarks' value={formData.remarks} placeholder="Remarks" onChange={handleChange} rows='3'/>
                                     
                                    </div>
                               
                                    
                                </div>
                            </form>
                            <form className="d-flex justify-content-center">
                                <div className="row mb-3 text-start w-100 ps-3 pe-3"> 
                                    <div className="col-md-4">
                                        <label htmlFor="status" className="form-label">Status</label>
                                        <select className="form-select text-uppercase" aria-label="Default select example" id='status' name='status' value={formData.status} onChange={handleChange}>
                                            <option selected disabled>Select an option</option>
                                            <option value="Released">Released</option>
                                            <option value="Available">Available</option>
                                            <option value="Defective">Defective</option>
                                        </select>
                                        {errors.brand && <p style={{ color: 'red' }}>{errors.brand}</p>}
                                    </div>
                                    <div className="col-md-8">
                                        <label htmlFor="last_device_user" className="form-label">Last Device User</label>
                                        <input type="text" className="form-control" id="last_device_user" name='last_device_user' value={formData.last_device_user} placeholder="Last Device User" onChange={handleChange}/>
                                    </div>
                                    
                                </div>
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
                                <div className="row  text-start w-100 ps-3 pe-3 pt-3">
                                    <div className="col-md-6">
                                        <label htmlFor="acc_username" className="form-label">Device Username</label>
                                        <input type="text" className="form-control" id="acc_username" name='acc_username' value={formData.acc_username} placeholder="Device Username" onChange={handleChange}/>
                                        {errors.acc_username && <p style={{ color: 'red' }}>{errors.acc_username}</p>}
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="acc_password" className="form-label">Device Password</label>
                                        <input type="text" className="form-control" id="acc_password" name='acc_password' value={formData.acc_password} placeholder="Device Password" onChange={handleChange}/>
                                        {errors.acc_password && <p style={{ color: 'red' }}>{errors.acc_password}</p>}
                                    </div>
                                </div>
                            </form>
                            <form className="d-flex justify-content-center">
                                <div className="row mb-3 text-start w-100 ps-3 pe-3">
                                    <div className="col-md-12 mb-1   ">
                                        <label htmlFor="requestor" className="form-label">Requestor</label>
                                        {/* <input type="text" className="form-control h-75 d-inline-block" id="model" placeholder="Device Model" h-50 /> */}
                                        <input className="form-control" id="requestor" name='requestor' value={formData.requestor} onChange={handleChange}></input>
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