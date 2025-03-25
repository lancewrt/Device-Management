import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
import { ArrowLeft, ArrowRight } from 'react-bootstrap-icons';
import NavBar from '../NavBar/NavBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';


const AddDevice = () => {
    const navigate = useNavigate();
    const [deviceName, setDeviceName] = useState('');
    const [errors, setErrors] = useState({});
    const [deviceType, setDeviceType] = useState('');
    const [formData, setFormData] = useState({
        deviceName: '',
        deviceModel: '',
        serialNumber: '',
        deviceType: '',
        deviceBrand: '',
        condition: '',
        specification: '',
        remarks: '',
        lastDeviceUser: '',
        status: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
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

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your submit logic here
        console.log('Device Name:', deviceName);
        console.log('Device Type:', deviceType);
    };

    return (
        <div className="d-flex justify-content-center align-items-center top-0">
            <div className="container py-4" style={{height: "100vh"}}>
                <NavBar />
                <div className="d-flex justify-content-start mb-3">
                    <Button variant="outline-primary" className="d-flex align-items-center border-0 fw-bold" onClick={() => navigate(-1)}>
                        <FontAwesomeIcon icon={faArrowLeft} size='xl' className='d-flex justify-content-left border-0 pe-2'/> Back
                    </Button>
                    
                </div>
                <div className="d-flex mb-3">
                    
                </div>
                <h3 className='text-start fw-bold'>Add Device</h3>
                <Card> 
                    <Card.Body>
                    <nav>
                        <div className="nav nav-tabs" id="nav-tab" role="tablist">
                            <button className="nav-link active" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="true">Device Info</button>
                        </div>
                    </nav>
                    
                    <div className="tab-content" id="nav-tabContent">

                        <div className="tab-pane fade show active" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                            <form className="d-flex justify-content-center">
                                <div className="row mt-3 text-start w-100 ps-3 pe-3 pt-3">
                                <div className="col-md-4">
                                        <label htmlFor="deviceModel" className="form-label">Computer Name</label>
                                        <input type="text" className="form-control" id="deviceName" name='deviceName' value={formData.deviceName} placeholder="Computer Name" onChange={handleChange}/>
                                        {errors.deviceName && <p style={{ color: 'red' }}>{errors.deviceName}</p>}
                                    </div>
                                    <div className="col-md-4 ">
                                        <label htmlFor="deviceModel" className="form-label">Model</label>
                                        <input type="text" className="form-control" id="deviceModel" name='deviceModel' value={formData.deviceModel} placeholder="Device Model" onChange={handleChange}/>
                                        {errors.deviceModel && <p style={{ color: 'red' }}>{errors.deviceModel}</p>}
                                    </div>
                                    <div className="col-md-4 ">
                                        <label htmlFor="serialId" className="form-label">Serial Number</label>
                                        <input type="text" className="form-control" id="serialNumber" name='serialNumber' value={formData.serialNumber} placeholder="Serial ID" onChange={handleChange}/>
                                        {errors.serialNumber && <p style={{ color: 'red' }}>{errors.serialNumber}</p>}
                                    </div>
                                    
                                </div>
                            </form>
                            <form className="d-flex justify-content-center">
                                <div className="row text-start w-100 p-3">
                                    <div className="col-md-4 ">
                                        <label htmlFor="serialId" className="form-label">Device Type</label>
                                        <select className="form-select" aria-label="Default select example" id='deviceType' name='deviceType' value={formData.deviceType} onChange={handleChange}>
                                            <option selected >Open this select menu</option>
                                            <option value="LAPTOP">LAPTOP</option>
                                            <option value="DESKTOP">DESKTOP</option>
                                        </select>
                                        {errors.deviceType && <p style={{ color: 'red' }}>{errors.deviceType }</p>}
                                    </div>
                                    <div className="col-md-4">
                                        <label htmlFor="serialId" className="form-label">Device Brand</label>
                                        <select className="form-select" aria-label="Default select example" id='deviceBrand' name='deviceBrand' value={formData.deviceBrand} onChange={handleChange}>
                                            <option selected >Open this select menu</option>
                                            <option value="ACER">ACER</option>
                                            <option value="APPLE">APPLE</option>
                                            <option value="ASUS">ASUS</option>
                                            <option value="DELL">DELL</option>
                                            <option value="HP">HP</option>
                                            <option value="HUAWEI">HUAWEI</option>
                                            <option value="LENOVO">LENOVO</option>
                                            <option value="MSI">MSI</option>
                                        </select>
                                        {errors.deviceBrand && <p style={{ color: 'red' }}>{errors.deviceBrand}</p>}
                                    </div>
                                    <div className="col-md-4">
                                        <label htmlFor="condition" className="form-label">Condition</label>
                                        <input type="text" className="form-control" id="condition" name='condition' value={formData.condition} placeholder="Device Name" onChange={handleChange}/>
                                        {errors.condition && <p style={{ color: 'red' }}>{errors.condition}</p>}
                                    </div>
                                </div>
                            </form>
                            <form className="d-flex justify-content-center">
                                   
                                <div className="row mb-3 text-start w-100 ps-3 pe-3">
                                    <div className="col-md-6 ">
                                        <label htmlFor="deviceModel" className="form-label">Specification</label>
                                        <textarea type="text" className="form-control" id="specification" name='specification' value={formData.specification} placeholder="Device Specification" onChange={handleChange} rows='3'/>
                                        {errors.specification && <p style={{ color: 'red' }}>{errors.specification}</p>}
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="deviceModel" className="form-label">Remarks</label>
                                        <textarea type="text" className="form-control" id="deviceName" name='deviceName' value={formData.deviceName} placeholder="Remarks" onChange={handleChange} rows='3'/>
                                        {errors.deviceName && <p style={{ color: 'red' }}>{errors.deviceName}</p>}
                                    </div>
                               
                                    
                                </div>
                            </form>
                            <form className="d-flex justify-content-center">
                                <div className="row mb-3 text-start w-100 ps-3 pe-3"> 
                                    <div className="col-md-8">
                                        <label htmlFor="serialId" className="form-label">Last Device User</label>
                                        <input type="text" className="form-control" id="lastDeviceUser" name='lastDeviceUser' value={formData.lastDeviceUser} placeholder="Last Device User" onChange={handleChange}/>
                                    </div>
                                    <div className="col-md-4">
                                        <label htmlFor="serialId" className="form-label">Status</label>
                                        <input type="text" className="form-control" id="status" name='status' value={formData.status} placeholder="Status" onChange={handleChange}/>
                                    </div>
                                    
                                </div>
                            </form>
                            <div className="d-flex justify-content-end mb-3 pe-1">
                                <Button type='button' className="d-flex align-items-center me-4" >
                                    Add &nbsp;<ArrowRight className="me-2" />
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

export default AddDevice;