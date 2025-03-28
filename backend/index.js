const { PDFDocument } = require('pdf-lib');
const { readFile, writeFile } = require('fs/promises');
const express = require('express');
const mysql = require('mysql2');
const mysqlp = require('mysql2/promise');
const app = express();
const port = 5000;
const cors = require('cors');
const path = require('path');

app.use(express.urlencoded({ extended: true })); 
app.use(express.json());
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


async function createPdf(input, output,devices) {
    try {
        console.log("Populating PDF fields with:", devices[0]); // Log first device data

        // Assuming only one device is used per PDF, take the first item in the array
        const device = devices[0]; 
        const pdfDoc = await PDFDocument.load(await readFile(input));
        const form = pdfDoc.getForm();

        // Fill out form fields
        form.getTextField('Name').setText(`${device.fname} ${device.lname}`.trim());
        form.getTextField('Date').setText(device.release_date ? device.release_date.split(" ")[0] : "");
        form.getTextField('Serial Number').setText(device.serial_number);
        form.getTextField('Specification').setText(device.specs);
        form.getTextField('Model').setText(device.model);
        form.getTextField('Brand').setText(device.brand);
        form.getTextField('Device Type').setText(device.device_type);
        form.getTextField('Username').setText(device.acc_username || "");
        form.getTextField('Password').setText(device.acc_password || ""); 

        const pdfBytes = await pdfDoc.save();
        await writeFile(output, pdfBytes);
        console.log('PDF created!');

        return output;
    } catch (err) {
        console.error(err);
        throw err;
    }
}

app.post('/generate-pdf', async (req, res) => {
    try {
        console.log("Incoming request data:", req.body);

        let { devices } = req.body;; // Extract `device` array

        if (!Array.isArray(devices)) {
            if (devices && typeof devices === "object") {
                devices = [devices]; // Convert single object to array
            } else {
                console.error("❌ Invalid request format: expected a non-empty array or object.");
                return res.status(400).json({ error: "Invalid request format, expected a non-empty array or object" });
            }
        }

        const inputPath  = path.join(__dirname, 'accountability_template.pdf');
        const outputPath = path.join(__dirname, 'output.pdf');

        await createPdf(inputPath, outputPath, devices);

        res.download(outputPath, 'output.pdf'); // Send the file to the client
    } catch (err) {
        res.status(500).json({ error: 'Failed to generate PDF' });
    }
});
      
//createPdf('accountability_template.pdf', 'output.pdf');

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

app.get('/available-device', (req, res) => {
    const { serial } = req.query; // Get serial_number from query params
    const query = `SELECT * FROM device WHERE status = "Available" AND serial_number LIKE ? LIMIT 5`; 

    db.query(query, [`%${serial}%`], (err, results) => {
        if (err) {
            console.error("❌ Error fetching available devices:", err);
            return res.status(500).json({ error: "Internal server error" });
        }
        if (results.length === 0) {
            return res.status(404).json({ message: 'No matching available devices found' });
        }

        res.status(200).json(results);
    });
});


app.get('/device', (req, res) => {
    const { page = 1, limit = 10, search = '' } = req.query;
    const offset = (page - 1) * limit;

    let searchCondition = '';
    let queryParams = [parseInt(limit), parseInt(offset)];

    // Apply search filter only if search query is present
    if (search.trim() !== '') {
        searchCondition = `WHERE (d.computer_name LIKE ? OR d.serial_number LIKE ? OR e.fname LIKE ? OR e.lname LIKE ?)`;
        queryParams = [`%${search}%`, `%${search}%`, `%${search}%`, `%${search}%`, parseInt(limit), parseInt(offset)];
    }

    db.query(`
        SELECT d.*, a.release_date, e.fname, e.lname
        FROM device d
        LEFT JOIN assignment a ON d.device_id = a.device_id
        LEFT JOIN employee e ON a.emp_id = e.emp_id
        ${searchCondition}
        ORDER BY d.device_id DESC
        LIMIT ? OFFSET ?
    `, queryParams, (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Database error' });
        }

        // Count total records (with or without search)
        let countQuery = `
            SELECT COUNT(*) AS total 
            FROM device d
            LEFT JOIN assignment a ON d.device_id = a.device_id
            LEFT JOIN employee e ON a.emp_id = e.emp_id
            ${search.trim() !== '' ? searchCondition : ''}
        `;

        db.query(countQuery, search.trim() !== '' ? [`%${search}%`, `%${search}%`, `%${search}%`, `%${search}%`] : [], (err, countResults) => {
            if (err) {
                return res.status(500).json({ error: 'Database error' });
            }

            const total = countResults[0].total;
            res.status(200).json({ data: results, total, page: parseInt(page), limit: parseInt(limit) });
        });
    });
});



app.get('/assigned-device', (req, res) => {
    const { page = 1, limit = 10, search = '' } = req.query;
    const offset = (page - 1) * limit;

    let searchCondition = '';
    let queryParams = [parseInt(limit), parseInt(offset)];

    // Apply search filter only if search query is present
    if (search.trim() !== '') {
        searchCondition = `AND (e.fname LIKE ? OR e.lname LIKE ?)`;
        queryParams = [`%${search}%`, `%${search}%`, parseInt(limit), parseInt(offset)];
    }

    db.query(`
        SELECT d.computer_name, d.serial_number, d.device_id, a.release_date, 
               e.fname, e.lname, dept.dept_name, bu.bu_name
        FROM device d
        LEFT JOIN assignment a ON d.device_id = a.device_id
        LEFT JOIN employee e ON a.emp_id = e.emp_id
        LEFT JOIN department dept ON e.dept_id = dept.dept_id
        LEFT JOIN business_unit bu ON e.bu_id = bu.bu_id
        WHERE d.status = 'Released' ${searchCondition}
        ORDER BY d.device_id DESC
        LIMIT ? OFFSET ?
    `, queryParams, (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Database error' });
        }

        // Count total records (with or without search)
        let countQuery = `
            SELECT COUNT(*) AS total 
            FROM device d
            LEFT JOIN assignment a ON d.device_id = a.device_id
            LEFT JOIN employee e ON a.emp_id = e.emp_id
            WHERE d.status = 'Released' ${search.trim() !== '' ? searchCondition : ''}
        `;

        db.query(countQuery, search.trim() !== '' ? [`%${search}%`, `%${search}%`] : [], (err, countResults) => {
            if (err) {
                return res.status(500).json({ error: 'Database error' });
            }

            const total = countResults[0].total;
            res.status(200).json({ data: results, total, page: parseInt(page), limit: parseInt(limit) });
        });
    });
});



app.get('/device/:id', (req, res) => {
    const id = req.params.id;

    const sql = `
        SELECT 
            d.device_id,
            d.computer_name,
            d.serial_number,
            d.model,
            d.device_type,
            d.brand,
            d.specs,
            d.status,
            d.remarks,
            d.last_device_user,

            a.ass_id,
            a.release_date,
            a.return_date,
            a.requestor,
            a.acc_username,
            a.acc_password,

            e.emp_id,
            e.fname,
            e.lname,
            e.mname,
            e.phone_no,
            e.email,
            e.emp_status,

            dep.dept_name,
            des.des_name,
            loc.loc_name,
            bu.bu_name

        FROM device d
        LEFT JOIN assignment a ON d.device_id = a.device_id
        LEFT JOIN employee e ON a.emp_id = e.emp_id
        LEFT JOIN department dep ON e.dept_id = dep.dept_id
        LEFT JOIN designation des ON e.des_id = des.des_id
        LEFT JOIN location loc ON e.loc_id = loc.loc_id
        LEFT JOIN business_unit bu ON e.bu_id = bu.bu_id
        WHERE d.device_id = ?;
    `;

    db.query(sql, [id], (err, results) => {
        if (err) {
            console.error("Database error:", err);
            return res.status(500).json({ error: "Database error" });
        }

        if (results.length === 0) {
            return res.status(404).json({ message: "Device not found" });
        }

        const deviceData = results[0];

        // If no assignment, return only device info
        if (!deviceData.ass_id) {
            return res.status(200).json({
                device_id: deviceData.device_id,
                computer_name: deviceData.computer_name,
                serial_number: deviceData.serial_number,
                model: deviceData.model,
                device_type: deviceData.device_type,
                brand: deviceData.brand,
                specs: deviceData.specs,
                status: deviceData.status,
                remarks: deviceData.remarks,
                last_device_user: deviceData.last_device_user,
            });
        }

        // Otherwise, return full data with assignment and employee details
        res.status(200).json(deviceData);
    });
});


app.post("/add-device", (req, res) => {
    const {
        computer_name,
        model,
        serial_number,
        device_type,
        brand,
        specs,
        remarks,
        last_device_user,
        status
    } = req.body;

    const sql = `
        INSERT INTO device (computer_name, model, serial_number, device_type, brand, specs, remarks, last_device_user, status)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    db.query(sql, [computer_name, model, serial_number, device_type, brand, specs, remarks, last_device_user, status], (err, result) => {
        if (err) {
            console.error("Error inserting data:", err);
            return res.status(500).json({ error: "Failed to insert data" });
        }
        res.status(201).json({ message: "Device added successfully", deviceId: result.insertId });
    });
});

app.post('/add-entry', (req, res) => {
    const {
        fname, lname, mi, phone_no, email, emp_status,
        department, designation, business_unit, location,
        computer_name, model, serial_number, device_type, brand, specs, remarks, status, last_device_user,
        acc_username, acc_password, requestor
    } = req.body;

    db.beginTransaction(err => {
        if (err) {
            return res.status(500).json({ error: 'Transaction error' });
        }

        // Check if serial number exists
        const checkDevice = `SELECT device_id FROM device WHERE serial_number = ?`;

        db.query(checkDevice, [serial_number], (err, deviceResults) => {
            if (err) {
                return db.rollback(() => res.status(500).json({ error: 'Error checking device', details: err }));
            }

            let device_id;

            if (deviceResults.length > 0) {
                // Device exists -> Update status
                device_id = deviceResults[0].device_id;

                const updateDeviceStatus = `UPDATE device SET status = ?, last_device_user = ? WHERE device_id = ?`;
                db.query(updateDeviceStatus, ['Released', last_device_user, device_id], (err) => {
                    if (err) {
                        return db.rollback(() => res.status(500).json({ error: 'Failed to update device status', details: err }));
                    }

                    // Continue with employee and assignment insertion
                    insertEmployeeAndAssignment(device_id);
                });

            } else {
                // Device does NOT exist -> Insert new device
                const insertDevice = `
                    INSERT INTO device (computer_name, model, serial_number, device_type, brand, specs, status, remarks, last_device_user)
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;

                db.query(insertDevice, [computer_name, model, serial_number, device_type, brand, specs, status, remarks, last_device_user], (err, deviceResult) => {
                    if (err) {
                        return db.rollback(() => res.status(500).json({ error: 'Failed to insert device', details: err }));
                    }

                    device_id = deviceResult.insertId;

                    // Continue with employee and assignment insertion
                    insertEmployeeAndAssignment(device_id);
                });
            }
        });

        // Function to insert employee and assignment
        function insertEmployeeAndAssignment(device_id) {
            const insertEmployee = `
                INSERT INTO employee (fname, lname, mname, phone_no, email, emp_status, dept_id, des_id, bu_id, loc_id) 
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`

            db.query(insertEmployee, [fname, lname, mi, phone_no, email, emp_status, department, designation, business_unit, location], (err, employeeResult) => {
                if (err) {
                    return db.rollback(() => res.status(500).json({ error: 'Failed to insert employee', details: err }));
                }
                const emp_id = employeeResult.insertId;

                // Insert into assignment table
                const insertAssignment = `
                    INSERT INTO assignment (release_date, return_date, requestor, acc_username, acc_password, emp_id, device_id)
                    VALUES (NOW(), NULL, ?, ?, ?, ?, ?)`;

                db.query(insertAssignment, [requestor, acc_username, acc_password, emp_id, device_id], (err) => {
                    if (err) {
                        return db.rollback(() => res.status(500).json({ error: 'Failed to insert assignment', details: err }));
                    }

                    db.commit(err => {
                        if (err) {
                            return db.rollback(() => res.status(500).json({ error: 'Commit failed', details: err }));
                        }
                        return res.status(200).json({ message: 'Entry added successfully', emp_id, device_id });
                    });
                });
            });
        }
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
