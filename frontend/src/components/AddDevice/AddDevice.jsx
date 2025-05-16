import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faComputer, faPlus } from '@fortawesome/free-solid-svg-icons';
import NavBar from '../NavBar/NavBar';
import './AddDevice.css';

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
        status: '',
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
      
        if (!formData.brand || formData.brand === 'Open this select menu') {
            tempErrors.brand = 'Please select a device brand';
            isValid = false;
        }
      
        if (formData.computer_name.trim().length < 3) {
          tempErrors.computer_name = 'Device name must be at least 3 characters';
          isValid = false;
        }

        if (!formData.model.trim()) {
            tempErrors.model = 'Device model is required';
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
        if (validateForm()) {
            try {
                const response = await axios.post("http://localhost:5000/add-device", formData);
                navigate(`/device-info/${response.data.deviceId}`);
            } catch (error) {
                console.error("Error submitting data:", error);
                alert("Failed to submit data.");
            }
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center w-100 min-vh-100" style={{margin: "auto"}}>
            <div className="w-100 row h-100 bg-white">
                <div className='col-2 p-0 min-vh-100'>
                    <NavBar />
                </div>
                <div className='col p-5 mt-5'>
                    <button 
                        className="btn btn-outline-secondary"
                        onClick={() => navigate(-1)}
                    >
                        <FontAwesomeIcon icon={faArrowLeft} className="back-icon" />
                        Back
                    </button>
                    <div className="d-flex align-items-center gap-3 mt-5">
                        <FontAwesomeIcon icon={faComputer} size='3x' className='text-dark'/>
                        <h1 className="fw-bold m-0">Add Device</h1>
                    </div>
                    <div className="device-form-card border mt-3">
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                {/* First row */}
                                <div className="form-row">
                                    <div className="form-group">
                                        <div className="floating-form-group">
                                            <input 
                                                type="text" 
                                                className={errors.computer_name ? 'form-input error' : 'form-input'} 
                                                id="computer_name" 
                                                name="computer_name" 
                                                value={formData.computer_name} 
                                                onChange={handleChange}
                                                placeholder=" "
                                            />
                                            <label htmlFor="computer_name" className="floating-label">Computer Name</label>
                                            {errors.computer_name && <div className="error-message">{errors.computer_name}</div>}
                                        </div>
                                    </div>
                                    
                                    <div className="form-group">
                                        <div className="floating-form-group">
                                            <input 
                                                type="text" 
                                                className={errors.model ? 'form-input error' : 'form-input'} 
                                                id="model" 
                                                name="model" 
                                                value={formData.model} 
                                                onChange={handleChange}
                                                placeholder=" "
                                            />
                                            <label htmlFor="model" className="floating-label">Model</label>
                                            {errors.model && <div className="error-message">{errors.model}</div>}
                                        </div>
                                    </div>
                                    
                                    <div className="form-group">
                                        <div className="floating-form-group">
                                            <input 
                                                type="text" 
                                                className={errors.serial_number ? 'form-input error' : 'form-input'} 
                                                id="serial_number" 
                                                name="serial_number" 
                                                value={formData.serial_number} 
                                                onChange={handleChange}
                                                placeholder=" "
                                            />
                                            <label htmlFor="serial_number" className="floating-label">Serial Number</label>
                                            {errors.serial_number && <div className="error-message">{errors.serial_number}</div>}
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Second row */}
                                <div className="form-row">
                                    <div className="form-group">
                                        <div className="floating-form-group">
                                            <select 
                                                className={errors.device_type ? 'form-select error' : 'form-select'} 
                                                id="device_type" 
                                                name="device_type" 
                                                value={formData.device_type} 
                                                onChange={handleChange}
                                            >
                                                <option value="" disabled>Select device type</option>
                                                <option value="LAPTOP">LAPTOP</option>
                                                <option value="DESKTOP">DESKTOP</option>
                                            </select>
                                            <label htmlFor="device_type" className="floating-label">Device Type</label>
                                            {errors.device_type && <div className="error-message">{errors.device_type}</div>}
                                        </div>
                                    </div>
                                    
                                    <div className="form-group">
                                        <div className="floating-form-group">
                                            <select 
                                                className={errors.brand ? 'form-select error' : 'form-select'} 
                                                id="brand" 
                                                name="brand" 
                                                value={formData.brand} 
                                                onChange={handleChange}
                                            >
                                                <option value="" disabled>Select brand</option>
                                                <option value="ACER">ACER</option>
                                                <option value="APPLE">APPLE</option>
                                                <option value="ASUS">ASUS</option>
                                                <option value="DELL">DELL</option>
                                                <option value="HP">HP</option>
                                                <option value="HUAWEI">HUAWEI</option>
                                                <option value="LENOVO">LENOVO</option>
                                                <option value="MSI">MSI</option>
                                            </select>
                                            <label htmlFor="brand" className="floating-label">Device Brand</label>
                                            {errors.brand && <div className="error-message">{errors.brand}</div>}
                                        </div>
                                    </div>
                                    
                                    <div className="form-group">
                                        <div className="floating-form-group">
                                            <select 
                                                className="form-select" 
                                                id="status" 
                                                name="status" 
                                                value={formData.status} 
                                                onChange={handleChange}
                                            >
                                                <option value="" disabled>Select status</option>
                                                <option value="Released">Released</option>
                                                <option value="Available">Available</option>
                                                <option value="Defective">Defective</option>
                                            </select>
                                            <label htmlFor="status" className="floating-label">Status</label>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Third row - Textareas */}
                                <div className="form-row">
                                    <div className="form-group textarea-group">
                                        <div className="floating-form-group">
                                            <textarea 
                                                className={errors.specs ? 'form-textarea error' : 'form-textarea'} 
                                                id="specs" 
                                                name="specs" 
                                                value={formData.specs} 
                                                onChange={handleChange}
                                                placeholder=" "
                                            ></textarea>
                                            <label htmlFor="specs" className="floating-label">Specification</label>
                                            {errors.specs && <div className="error-message">{errors.specs}</div>}
                                        </div>
                                    </div>

                                    <div className="form-group textarea-group">
                                        <div className="floating-form-group">
                                            <textarea 
                                                className="form-textarea" 
                                                id="remarks" 
                                                name="remarks" 
                                                value={formData.remarks} 
                                                onChange={handleChange}
                                                placeholder=" "
                                            ></textarea>
                                            <label htmlFor="remarks" className="floating-label">Remarks</label>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Fourth row - Last Device User */}
                                <div className="form-row">
                                    <div className="form-group full-width">
                                        <div className="floating-form-group">
                                            <input 
                                                type="text" 
                                                className="form-input" 
                                                id="last_device_user" 
                                                name="last_device_user" 
                                                value={formData.last_device_user} 
                                                onChange={handleChange}
                                                placeholder=" "
                                            />
                                            <label htmlFor="last_device_user" className="floating-label">Last Device User</label>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="form-actions">
                                    <button type="submit" className="submit-button">
                                        <FontAwesomeIcon icon={faPlus} className="button-icon" />
                                        Add Device
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddDevice;