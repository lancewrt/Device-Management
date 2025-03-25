import {React, useState, useEffect, use }from 'react';
import Laptop from './laptop.svg';
import NavBar from '../NavBar/NavBar';
import { Card, Button, Form, Pagination, Table } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Hr } from 'react-bootstrap-icons';

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

    return (
        <div className="d-flex justify-content-center align-items-center top-0" style={{margin: "auto"}}>
        {/* <AdminTopNavbar /> */}

        <div className="container py-4" style={{height: "100vh"}}>
            <NavBar />
            
            <div className="d-flex justify-content-start mb-3">
                <Button variant="outline-primary" className="d-flex align-items-center border-0 fw-bold" onClick={() => navigate(-1)}>
                    <FontAwesomeIcon icon={faArrowLeft} size='xl' className='d-flex justify-content-left border-0 pe-2'/> Back
                </Button>
                
            </div>
            <h2 className='text-start fw-bold ps-4 pb-2 pt-3'>Device Information</h2>
            <Card>
                <Card.Body >
                <div className="d-flex justify-content-start mb-3 ps-5">
                    <img src={Laptop} alt='laptop' style={{height: '150px'}} />
                    <div className='ps-3 pt-4 mt-1 text-start'>
                        <span className='display-6 fw-light'>{device[0]?.model || "Loading..."}</span>
                        <p className='fs-4 fw-light ps-1 pt-1'>Serial Number: {device[0]?.serial_number}</p>
                    </div>
                </div>
                <hr style={{width: '90%', margin: "auto"}}/>

                <div className='pt-4 pb-4'>
                    <Table className='tabel w-100'>
                        <tr>
                            <td className="text-end fs-5 w-30" style={{ width: "30%" }}>Computer Name:</td>
                            <td className="text-start ps-5 w-70 fs-5 fw-light" style={{ width: "70%" }}>{device[0]?.computer_name || "#N/A"}</td>
                        </tr>
                        <tr className='pt-2'>
                            <td className="text-end fs-5 w-30" style={{ width: "30%" }}>Brand:</td>
                            <td className="text-start ps-5 w-70 fs-5 fw-light" style={{ width: "70%" }}>{device[0]?.brand}</td>
                        </tr>
                        <tr className='pt-2'>
                            <td className="text-end fs-5 w-30" style={{ width: "30%" }}>Device Type:</td>
                            <td className="text-start ps-5 w-70 fs-5 fw-light" style={{ width: "70%" }}>{device[0]?.device_type}</td>
                        </tr>
                        <tr className='pt-2'>
                            <td className="text-end fs-5 w-30 align-top " style={{ width: "30%" }}>Specs:</td>
                            <td className="text-start ps-5 w-70 fs-5 fw-light" style={{ width: "70%" }}>{device[0]?.specs || "#N/A"}</td>
                        </tr>
                        <tr className='pt-2'>
                            <td className="text-end fs-5 w-30 align-top" style={{ width: "30%" }}>Remarks:</td>
                            <td className="text-start ps-5 w-70 fs-5 fw-light pe-5" style={{ width: "70%" }}>{device[0]?.remarks || "#N/A"}</td>
                        </tr>
                        <tr className='pt-2'>
                            <td className="text-end fs-5 w-30 align-top" style={{ width: "30%" }}>Status:</td>
                            <td className="text-start ps-5 w-70 fs-5 fw-light" style={{ width: "70%" }}>{device[0]?.status || "#N/A"}</td>
                        </tr>
                        <tr className='pt-2'>
                            <td className="text-end fs-5 w-30 align-top" style={{ width: "30%" }}>Last Device User:</td>
                            <td className="text-start ps-5 w-70 fs-5 fw-light" style={{ width: "70%" }}>{device[0]?.last_device_user || "#N/A"} </td>
                        </tr>
                    </Table>
                </div>
                <hr style={{width: '90%', margin: "auto"}}/>
          
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

export default DeviceInfo;