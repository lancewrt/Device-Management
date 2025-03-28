import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
import { ArrowLeft, ArrowRight, Plus } from 'react-bootstrap-icons';
import NavBar from '../NavBar/NavBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';


const AddDevice = () => {
    const navigate = useNavigate();
 
    const [errors, setErrors] = useState({});
   
    const [formData, setFormData] = useState({
        computer_name: '',
        model: '',
        serial_number: '',
        device_type: '',
        brand: '',
        specs: '',
        remarks: '',
        last_device_user: '',
        status: 'Select an option',
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
      
        if (formData.brand === 'Open this select menu') {
            tempErrors.brand = 'Please select a device brand';
            isValid = false;
        }
      
        if (formData.computer_name.trim().length < 3) {
          tempErrors.computer_name = 'Device name must be at least 3 characters';
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

        setErrors(tempErrors);
        return isValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Add your submit logic here
        try {
            const response = await axios.post("http://localhost:5000/add-device", formData);
            alert("Data submitted successfully!");
            console.log("Response:", response.data.deviceId);
            navigate(`/device-info/${response.data.deviceId}`)
        } catch (error) {
            console.error("Error submitting data:", error);
            alert("Failed to submit data.");
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center" style={{margin: "auto"}}>
            <div className="container pb-4" >   
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
                                        <label htmlFor="model" className="form-label">Computer Name</label>
                                        <input type="text" className="form-control" id="computer_name" name='computer_name' value={formData.computer_name} placeholder="Computer Name" onChange={handleChange}/>
                                        {errors.computer_name && <p style={{ color: 'red' }}>{errors.formData.computer_name}</p>}
                                    </div>
                                    <div className="col-md-4 ">
                                        <label htmlFor="model" className="form-label">Model</label>
                                        <input type="text" className="form-control" id="model" name='model' value={formData.model} placeholder="Device Model" onChange={handleChange}/>
                                        {errors.model && <p style={{ color: 'red' }}>{errors.model}</p>}
                                    </div>
                                    <div className="col-md-4 ">
                                        <label htmlFor="serialId" className="form-label">Serial Number</label>
                                        <input type="text" className="form-control" id="serial_number" name='serial_number' value={formData.serial_number} placeholder="Serial ID" onChange={handleChange}/>
                                        {errors.serial_number && <p style={{ color: 'red' }}>{errors.serial_number}</p>}
                                    </div>
                                    
                                </div>
                            </form>
                            <form className="d-flex justify-content-center">
                                <div className="row text-start w-100 p-3">
                                    <div className="col-md-4 ">
                                        <label htmlFor="serialId" className="form-label">Device Type</label>
                                        <select className="form-select" aria-label="Default select example" id='device_type' name='device_type' value={formData.device_type} onChange={handleChange}>
                                            <option selected >Open this select menu</option>
                                            <option value="LAPTOP">LAPTOP</option>
                                            <option value="DESKTOP">DESKTOP</option>
                                        </select>
                                        {errors.device_type && <p style={{ color: 'red' }}>{errors.device_type }</p>}
                                    </div>
                                    <div className="col-md-4">
                                        <label htmlFor="serialId" className="form-label">Device Brand</label>
                                        <select className="form-select" aria-label="Default select example" id='brand' name='brand' value={formData.brand} onChange={handleChange}>
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
                                        {errors.brand && <p style={{ color: 'red' }}>{errors.brand}</p>}
                                    </div>
                                    <div className="col-md-4">
                                        <label htmlFor="status" className="form-label">Status</label>
                                        <select className="form-select" aria-label="Default select example" id='status' name='status' value={formData.status} onChange={handleChange}>
                                            <option selected disabled>Select an option</option>
                                            <option value="Released">Released</option>
                                            <option value="Available">Available</option>
                                            <option value="Defective">Defective</option>
                                        </select>
                                        
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
                                        <label htmlFor="model" className="form-label">Remarks</label>
                                        <textarea type="text" className="form-control" id="remarks" name='remarks' value={formData.remarks} placeholder="Remarks" onChange={handleChange} rows='3'/>
                                    </div>
                                </div>
                            </form>
                            <form className="d-flex justify-content-center mb-3">
                                <div className="row mb-3 text-start w-100 ps-3 pe-3"> 
                                    <div className="col-md-8">
                                        <label htmlFor="last_device_user" className="form-label">Last Device User</label>
                                        <input type="text" className="form-control" id="last_device_user" name='last_device_user' value={formData.last_device_user} placeholder="Last Device User" onChange={handleChange}/>
                                    </div>
                                </div>
                            </form>

                            <div className="d-flex justify-content-end mb-3 pe-1">
                                <Button type='button' className="d-flex align-items-center me-4" onClick={handleSubmit}>
                                     <Plus className="me-2" /> Add &nbsp;
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