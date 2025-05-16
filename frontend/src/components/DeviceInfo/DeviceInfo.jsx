import {React, useState, useEffect, use }from 'react';
import Laptop from './laptop.svg';
import NavBar from '../NavBar/NavBar';
import { Card, Button, Form, Pagination, Table } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowsSpin, faFileExport } from '@fortawesome/free-solid-svg-icons';
import { Hr, X } from 'react-bootstrap-icons';
import StatusLabel from '../StatusLabel/StatusLabel';
import axios from 'axios';


const DeviceInfo = () => {
    const navigate = useNavigate();
    const [device, setDevice] = useState([]);
    const {id} = useParams();
 

    useEffect(() => {
        getDevice();
    }, []);

    const getDevice = async () => {
        try {
           
            console.log(id);
            const res = await fetch(`http://localhost:5000/device/${id}`);
            const jsonData = await res.json();
            setDevice(jsonData);
            console.log(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    };

    const generatePdf = async () => {
    
        try {
            const response = await axios.post(
                'http://localhost:5000/generate-pdf',
                { devices: device },
                { responseType: 'blob' } // Get file as a blob
            );
    
            const blob = new Blob([response.data], { type: "application/pdf" });
            const url = window.URL.createObjectURL(blob);
    
            // Open the PDF in a new tab
            const printWindow = window.open(url);
            if (printWindow) {
                printWindow.onload = () => {
                    printWindow.focus(); // Ensure focus on the new tab
                    printWindow.print(); // Trigger the print dialog
                };
            } else {
                alert("Pop-ups are blocked! Please allow pop-ups for this site.");
            }
        } catch (error) {
            console.error("❌ Error generating PDF:", error);
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center w-100 min-vh-100" style={{margin: "auto"}}>
        {/* <AdminTopNavbar /> */}
        <div className="bg-white w-100 row">
            <div className='col-2 p-0'>
                <NavBar />
            </div>
            <div className='col p-5 mt-5'>
                <div className="d-flex justify-content-start">
                    <Button 
                        variant="outline-secondary" 
                        className="d-flex align-items-center" onClick={() => navigate(-1)}>
                        <FontAwesomeIcon icon={faArrowLeft} size='l ' className='d-flex justify-content-left border-0 pe-2 text-decoration-underline'/> 
                            Back
                    </Button>
                </div>
                <h1 className='fw-bold pb-2 pt-3 text-dark'>Device Information</h1>
                <Card>
                    <Card.Body >
                    <div className="d-flex justify-content-start pb-1 ms-5 ps-5">
                        <img src={Laptop} alt='laptop' style={{height: '170px'}} />
                        <div className='ps-3 pt-4 mt-1 text-start'>
                            <span className='display-6 fw-light'>{device.model || "Loading..."}</span>
                            <p className='fs-4 fw-light ps-1 pt-1 mb-0'>Serial Number: {device.serial_number}</p>
                            <p className='fs-5 ps-1 m-0  '><StatusLabel status = {device.status || "#N/A"}/></p>
                            
                        </div>
                    </div>
                    <hr style={{width: '90%', margin: "auto"}}/>

                    <div className='pt-4 pb-2'>
                        <Table className='table w-100'>
                            <tr>
                                <td className="text-end fs-5 w-30" style={{ width: "30%" }}>Computer Name:</td>
                                <td className="text-start ps-5 w-70 fs-5 fw-bold align-top" style={{ width: "70%" }}>{device.computer_name || "#N/A"}</td>
                            </tr>
                            <tr className='pt-2'>
                                <td className="text-end fs-5 w-30" style={{ width: "30%" }}>Brand:</td>
                                <td className="text-start ps-5 w-70 fs-5 fw-light align-top" style={{ width: "70%" }}>{device.brand}</td>
                            </tr>
                            <tr className='pt-2'>
                                <td className="text-end fs-5 w-30" style={{ width: "30%" }}>Device Type:</td>
                                <td className="text-start ps-5 w-70 fs-5 fw-light align-top" style={{ width: "70%" }}>{device.device_type}</td>
                            </tr>
                            <tr className='pt-2 pe-5 ms-5'>
                                <td className="text-end fs-5 w-30 align-top " style={{ width: "30%" }}>Specs:</td>
                                <td className="text-start ps-5 w-70 fs-5 fw-light pe-5 align-top" style={{ width: "70%" }}>{device.specs || "#N/A"}</td>
                            </tr>
                            <tr className='pt-2'>
                                <td className="text-end fs-5 w-30 align-top" style={{ width: "30%" }}>Remarks:</td>
                                <td className="text-start ps-5 w-70 fs-5 fw-light pe-5 align-top" style={{ width: "70%" }}>{device.remarks || "#N/A"}</td>
                            </tr>
                            <tr className='pt-2'>
                                <td className="text-end fs-5 w-30 align-top" style={{ width: "30%" }}>Last Device User:</td>
                                <td className="text-start ps-5 w-70 fs-5 fw-light align-top" style={{ width: "70%" }}>{device.last_device_user || "#N/A"} </td>
                            </tr>
                            
                            <tr className='pt-2'>
                                <td className="text-end fs-5 w-30 align-top" style={{ width: "30%" }}>Release Date:</td>
                                <td className="text-start ps-5 w-70 fs-5 fw-light" style={{ width: "70%" }}>{device.release_date ? device.release_date.split(" ")[0] : "#N/A"}</td>
                            </tr>
                            
                        </Table>
                    </div>
                    <hr style={{width: '90%', margin: "auto"}}/>
                    <div className='pt-4 '>
                        <Table className='table w-100'>
                            <tr>
                                <td className="text-end fs-5 w-30" style={{ width: "30%" }}>Assigned To:</td>
                                <td className="text-start ps-5 w-70 fs-5 fw-bold text-capitalized align-top" style={{ width: "70%" }}>{device.fname || "#N/A"} {device.lname || "#N/A"}</td>
                            </tr>
                            <tr className='pt-2'>
                                <td className="text-end fs-5 w-30" style={{ width: "30%" }}>Phone Number:</td>
                                <td className="text-start ps-5 w-70 fs-5 fw-light align-top" style={{ width: "70%" }}>{device.phone_no || "#N/A"}</td>
                            </tr>
                            <tr className='pt-2'>
                                <td className="text-end fs-5 w-30" style={{ width: "30%" }}>Employment Status:</td>
                                <td className="text-start ps-5 w-70 fs-5 fw-light align-top" style={{ width: "70%" }}>{device.emp_status || "#N/A"}</td>
                            </tr>
                            <tr className='pt-2'>
                                <td className="text-end fs-5 w-30" style={{ width: "30%" }}>Business Unit:</td>
                                <td className="text-start ps-5 w-70 fs-5 fw-light align-top" style={{ width: "70%" }}>{device.bu_name || "#N/A"}</td>
                            </tr>
                            <tr className='pt-2'>
                                <td className="text-end fs-5 w-30" style={{ width: "30%" }}>Department:</td>
                                <td className="text-start ps-5 w-70 fs-5 fw-light align-top" style={{ width: "70%" }}>{device.dept_name || "#N/A"}</td>
                            </tr>
                            <tr className='pt-2 pe-5 ms-5'>
                                <td className="text-end fs-5 w-30 align-top " style={{ width: "30%" }}>Designation:</td>
                                <td className="text-start ps-5 w-70 fs-5 fw-light pe-5 align-top" style={{ width: "70%" }}>{device.des_name || "#N/A"}</td>
                            </tr>
                            <tr className='pt-2'>
                                <td className="text-end fs-5 w-30 align-top" style={{ width: "30%" }}>Location:</td>
                                <td className="text-start ps-5 w-70 fs-5 fw-light pe-5 align-top" style={{ width: "70%" }}>{device.loc_name || "#N/A"}</td>
                            </tr>
                        </Table>
                        <div>
                            <div className="d-flex justify-content-end mb-2 pe-5">
                                <Button variant="button-primary" className="btn btn-primary d-flex align-items-center fw-bold" onClick={generatePdf} disabled={device.status !== 'Released'}>
                                <FontAwesomeIcon icon={faArrowsSpin} size='lg' className='d-flex justify-content-left border-0 pe-2 '/> Generate Accountability
                                </Button>
                            </div>
                            <div className="d-flex justify-content-end mb-3 pe-5">
                                <Button variant="button-primary" className="btn btn-danger d-flex align-items-center fw-bold" disabled={device.status !== 'Released'} data-bs-toggle="modal" data-bs-target="#exampleModal">
                                <FontAwesomeIcon icon={faFileExport} size='lg' className='d-flex justify-content-left border-0 pe-2 ' />Turn Over
                                </Button>
                            </div>

                            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog modal-dialog-centered modal-lg">
                                        <div class="modal-content">
                                        <div class="modal-header">
                                            <h1 class="modal-title fs-5" id="exampleModalLabel">Turn Over</h1>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <div>
                                                <form className="d-flex justify-content-center">
                                                    <div className="row  text-start w-100 ps-3 pe-3 pt-3">
                                                        <div className="col-md-12">
                                                            <label htmlFor="acc_username" className="form-label">Remarks</label>
                                                            <textarea rows='3' type="text" className="form-control" id="acc_username" name='acc_username'  placeholder={device.remarks} value={device.remarks}/>
                                                        </div>
                                                        <div className="col-md-4 mt-3">
                                                            <label htmlFor="status" className="form-label">Status</label>
                                                            <select className="form-select text-uppercase" aria-label="Default select example" id='status' name='status' >
                                                                <option selected disabled>Select an option</option>
                                                                <option value="Defective">Pending</option>
                                                                <option value="Available">Available</option>
                                                                <option value="Defective">Defective</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </form>
                                                
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Turn Over</button>
                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        
                        </div>
            
                    </Card.Body>
                    
                </Card>
            </div>
        </div>
        </div>
    );
};

export default DeviceInfo;