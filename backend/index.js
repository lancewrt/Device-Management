const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 5000;

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
        SELECT e.first_name, e.last_name, d.brand_name AS device 
        FROM Employee e 
        JOIN Assignment a ON e.employee_id = a.employee_id
        JOIN Device d ON a.device_id = d.device_id
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
