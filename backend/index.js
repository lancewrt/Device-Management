const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 5000;
const cors = require('cors');

app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'device_management'
});

db.connect(err => {
    if (err) {
        console.error('Database connection failed:', err.stack);
        return;
    }
    console.log('Connected to database');
});

app.get('/api/employees', (req, res) => {
    db.query(`
        SELECT e.first_name, e.last_name, d.brand_name AS device, de.name AS department, des.name AS designation, d.device_type AS device_type
        FROM employee e 
        JOIN assignment a ON e.employee_id = a.employee_id
        JOIN device d ON a.device_id = d.device_id  
        JOIN department de ON e.department_id = de.department_id
        JOIN designation des ON e.designation_id = des.designation_id
    `, (err, results) => {
        if (err) {
            res.status(500).send(err);
            return;
        }
        res.json(results);
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
