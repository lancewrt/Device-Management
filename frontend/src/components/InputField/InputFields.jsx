import React, { useState } from "react";
import './InputFields.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Button, Form, Card, Pagination } from "react-bootstrap";
import { Plus, ThreeDotsVertical } from "react-bootstrap-icons";

const data = [
    { id: "#B-10021-31", title: "The Happiness Hypothesis", author: "Jonathan Haidt", count: 2 },
    { id: "#B-10021-32", title: "The Art of Happiness", author: "Jonathan Haidt", count: 2 },
    { id: "#B-10021-32", title: "The Happiness Hypothesis", author: "Jonathan Haidt", count: 2 },
    { id: "#B-10021-32", title: "The Happiness Hypothesis", author: "Jonathan Haidt", count: 2 },
  ];
  

const InputFields = () => {
    const [search, setSearch] = useState("");
    return (
        <div>
            {/* <AdminTopNavbar /> */}
            
            <div className="container py-4">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h1 className="text-danger fw-bold">All<span className="text-success">Value</span></h1>
                    <Button variant="outline-warning" className="d-flex align-items-center">
                    <Plus className="me-2" /> Add New
                    </Button>
                </div>
                <div className="d-flex mb-3">
                    <Form.Control type="text" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} className="me-2" />
                    <Button variant="primary">Search</Button>
                </div>
                <Card>
                    <Card.Body>
                    <Table striped bordered hover>
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
                        {data.map((item, index) => (
                            <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.author}</td>
                            <td>{item.count}</td>
                            <td><ThreeDotsVertical /></td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
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

export default InputFields;