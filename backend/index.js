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

app.post('/addRecord', async (req, res) => {
    const { 
        fname, lname, mi, department, designation, businessUnit, location, releaseDate, 
        deviceName, lastDeviceUser, deviceModel, serialNumber, deviceType, 
        deviceBrand, specification, notes, dusername, dpassword 
    } = req.body;

    const connection = await dbPromise.getConnection();

    try {
        await connection.beginTransaction();
        // 2. Insert into department (if new) and get ID
        const [departmentResult] = await connection.execute(
            `INSERT IGNORE INTO department (name) VALUES (?)`,
            [department]
        );
        const departmentId = departmentResult.insertId;

        
        const [designationResult] = await connection.execute(
            `INSERT IGNORE INTO designation (name) VALUES (?)`,
            [designation]
        );
        const designationId = designationResult.insertId;

        // 4. Insert into location (if new) and get ID
        const [locationResult] = await connection.execute(
            `INSERT IGNORE INTO location (name) VALUES (?)`,
            [location]
        );
        const locationId = locationResult.insertId;

        // 5. Insert into device
        const [deviceResult] = await connection.execute(
            `INSERT INTO device (device_name, model, serial_number, device_type, brand_name, specifications) 
            VALUES (?, ?, ?, ?, ?, ?)`,
            [deviceName, deviceModel, serialNumber, deviceType, deviceBrand, specification]
        );
        const deviceId = deviceResult.insertId;

        // 1. Insert into employee
        const [employeeResult] = await connection.execute(
            `INSERT INTO employee (first_name, last_name, middle_name, business_unit, department_id, designation_id, location_id) VALUES (?, ?, ?, ?, ?, ?, ?)`,
            [fname, lname, mi, businessUnit, departmentId, designationId, locationId]
        );
        const employeeId = employeeResult.insertId;
        

        

        // 6. Insert into device_account
        await connection.execute(
            `INSERT INTO device_account (device_id, employee_id, dusername, dpassword) 
            VALUES (?, ?, ?, ?)`,
            [deviceId, employeeId, dusername, dpassword]
        );

        // 7. Insert into assignment
        await connection.execute(
            `INSERT INTO assignment (employee_id, device_id, release_date, last_device_user, notes) 
            VALUES (?, ?, ?, ?, ?)`,
            [employeeId, deviceId, releaseDate, lastDeviceUser, notes]
        );

        await connection.commit();
        res.status(200).json({ message: 'Record added successfully' });
    } catch (error) {
        await connection.rollback();
        res.status(500).json({ error: error.message });
    } finally {
        connection.release();
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
