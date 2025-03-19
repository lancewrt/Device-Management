const express = require('express');
const mysql = require('mysql2');
const mysqlp = require('mysql2/promise');
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

const dbPromise = mysqlp.createPool({ host: 'localhost',
    user: 'root',
    password: '',
    database: 'device_management' });

app.use(express.json()); // For JSON requests
app.use(express.urlencoded({ extended: true })); // For form data

db.connect(err => {
    if (err) {
        console.error('Database connection failed:', err.stack);
        return;
    }
    console.log('Connected to database');
});

app.get('/departments', (req, res) => {
    db.query('SELECT * FROM department', (err, results) => {
        if (err) {
            res.status(500).send  
        }
  
        if (results.length === 0) {
          return res.status(404).json({ message: 'Department not found' });
        }
    
        res.status(200).json(results);
    });
});

app.get('/designation', (req, res) => {
    db.query('SELECT * FROM designation', (err, results) => {
        if (err) {
            res.status(500).send  
        }
  
        if (results.length === 0) {
          return res.status(404).json({ message: 'Designation not found' });
        }
    
        res.status(200).json(results);
    });
});

app.get('/business_unit', (req, res) => {
    db.query('SELECT * FROM business_unit', (err, results) => {
        if (err) {
            res.status(500).send  
        }
  
        if (results.length === 0) {
          return res.status(404).json({ message: 'Business Unit not found' });
        }
    
        res.status(200).json(results);
    });
});

app.get('/location', (req, res) => {
    db.query('SELECT * FROM location', (err, results) => {
        if (err) {
            res.status(500).send  
        }
  
        if (results.length === 0) {
          return res.status(404).json({ message: 'Location not found' });
        }
    
        res.status(200).json(results);
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
