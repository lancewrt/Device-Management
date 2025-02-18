import React, { useState, useEffect } from "react";
import './ViewInfo.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Button, Form, Card, Pagination} from "react-bootstrap";
import { Plus, ThreeDotsVertical } from "react-bootstrap-icons";
import axios from "axios";
import { Link , useParams} from "react-router-dom";


const ViewInfo = () => {
    const [search, setSearch] = useState("");
    const [employeeData, setEmployeeData] = useState([]);
    const [error, setError] = useState('');
    const { id } = useParams();

    useEffect(() => {
        getEmployeeInfo();

    }, []);

    


    const getEmployeeInfo = async (employeeId) => {
        try {
            setError('');
            const response = await axios.get(`http://localhost:5000/view-info/${id}`);
            setEmployeeData(response.data);
            console.log(response.data);
            return response.data;
        } catch (error) {
          console.error('Error fetching employee info:', error.response?.data || error.message);
          setError('Failed to fetch employee information');
          throw error;
        }
      };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            {/* <AdminTopNavbar /> */}
            
            <div className="container py-4">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h1 className="text-danger fw-bold">All<span className="text-success">Value</span></h1>
                </div>
                <div className="d-flex justify-content-end mb-3">
                    
                </div>
                {/* <div className="d-flex justify-content-start mb-3">
                    <Form.Control type="text" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} className="me-2 w-50" />
                    <Button variant="primary" className="ps-4 pe-4">Search</Button>
                </div> */}
                {error && <p className="text-danger">{error}</p>}
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h2 className="fw-bold ">Employee Details</h2>
                    <Button variant="primary" className="ps-4 pe-4 btn btn-success" aria-expanded="false">Create Accountability</Button>
                </div>
                {employeeData && (
                <Card className="mt-4">
                    <Card.Body>
                        <Table striped bordered hover>
                            <tbody>             
                                <tr className="table-primary fw-bold">
                                    <td colSpan="1" style={{textAlign: 'right'}}>Name</td>
                                    <td colSpan="2" style={{ textAlign: 'left' }}>{employeeData[0]?.first_name} {employeeData[0]?.last_name}</td>
                                    <td colSpan="1" style={{textAlign: 'right'}}>Status</td>
                                </tr>
                    
                                <tr>
                                    <td colSpan="0.5" className="fw-bold" style={{ textAlign: 'left'}}>Name</td>
                                    <td colSpan="1.5" style={{ textAlign: 'left' }}>{employeeData[0]?.first_name} {employeeData[0]?.last_name}</td>
                                    <td className="fw-bold" style={{ textAlign: 'left'}}>Name</td>
                                    <td style={{ textAlign: 'left' }}>{employeeData[0]?.first_name} {employeeData[0]?.last_name}</td>
                                </tr>
                            </tbody>
                        </Table>
                    
                    <p><strong>Name:</strong> {employeeData[0]?.first_name} {employeeData[0]?.last_name}</p>
                    <p><strong>Business Unit:</strong> {employeeData[0]?.business_unit}</p>
                    <p><strong>Department:</strong> {employeeData[0]?.department_name}</p>
                    <p><strong>Designation:</strong> {employeeData[0]?.designation_name}</p>
                    <p><strong>Location:</strong> {employeeData[0]?.location_name}</p>

                    <h5 className="mt-4">Device Assignments</h5>
                    {employeeData.map((assignment, index) => (
                        <div key={index} className="mb-3">
                        <p><strong>Device:</strong> {assignment.device_name} ({assignment.brand_name} - {assignment.model})</p>
                        <p><strong>Serial Number:</strong> {assignment.serial_number}</p>
                        <p><strong>Release Date:</strong> {assignment.release_date}</p>
                        <p><strong>Return Date:</strong> {assignment.date_return || 'N/A'}</p>
                        <p><strong>Device Username:</strong> {assignment.dusername}</p>
                        <hr />
                        </div>
                    ))}
                    </Card.Body>
                </Card>
                )}
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

export default ViewInfo;