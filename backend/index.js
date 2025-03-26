const { PDFDocument } = require('pdf-lib');
const { readFile, writeFile } = require('fs/promises');
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

async function createPdf(input, output) {
    try {
        const pdfDoc = await PDFDocument.load(await readFile(input));
    
        // Modify doc, fill out the form...
        const fieldNames = pdfDoc
        .getForm()
        .getFields()
        .map((f) => f.getName());
        console.log({ fieldNames });
    
        const form = pdfDoc.getForm();
    
        form.getTextField('Name').setText('Lance Bernal');
        form.getTextField('Serial Number').setText('1234567890');
        form.getTextField('Specification').setText('i5; 8GB RAM; 256GB SSD');
        form.getTextField('Model').setText('Dell Latitude E7470');
        form.getTextField('Brand').setText('Dell');
        form.getTextField('Device Type').setText('Laptop');
        form.getTextField('Username').setText('lbernal');
        form.getTextField('Password').setText('Allvalue@2025');
    
        
    
    
        const pdfBytes = await pdfDoc.save();
    
        await writeFile(output, pdfBytes);
        console.log('PDF created!');
    } catch (err) {
        console.log(err);
    }
}
      
createPdf('accountability_template.pdf', 'output.pdf');

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

/* app.get('/device', (req, res) => {
    db.query('SELECT * FROM device', (err, results) => {
        if (err) {
            res.status(500).send  
        }
  
        if (results.length === 0) {
          return res.status(404).json({ message: 'Device not found' });
        }
    
        res.status(200).json(results);
    });
});
 */

app.get('/device', (req, res) => {
    const { page = 1, limit = 10 } = req.query; // Default to page 1, 10 devices per page
    const offset = (page - 1) * limit;

    db.query('SELECT * FROM device LIMIT ? OFFSET ?', [parseInt(limit), parseInt(offset)], (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Database error' });
        }

        db.query('SELECT COUNT(*) AS total FROM device', (err, countResults) => {
            if (err) {
                return res.status(500).json({ error: 'Database error' });
            }

            const total = countResults[0].total;
            res.status(200).json({ data: results, total, page: parseInt(page), limit: parseInt(limit) });
        });
    });
});

/* app.get('/device/:id', (req, res) => {
    const id = req.params.id;
    db.query('SELECT * FROM device WHERE device_id = ?', [id], (err, results) => {
        if (err) {
            res.status(500).send  
        }
  
        if (results.length === 0) {
          return res.status(404).json({ message: 'Device not found' });
        }
    
        res.status(200).json(results);
    });
}); */

app.get('/device/:id', (req, res) => {
    const id = req.params.id;
    db.query(`SELECT 
                a.ass_id,
                a.release_date,
                a.return_date,
                a.remarks,
                a.acc_username,
                a.acc_password,
                
                e.emp_id,
                e.fname,
                e.lname,
                e.mname,
                e.phone_no,
                e.email,
                e.emp_status,

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

                dep.dept_name,
                des.des_name,
                loc.loc_name,
                bu.bu_name

            FROM assignment a
            JOIN employee e ON a.emp_id = e.emp_id
            JOIN device d ON a.device_id = d.device_id
            JOIN department dep ON e.dept_id = dep.dept_id
            JOIN designation des ON e.des_id = des.des_id
            JOIN location loc ON e.loc_id = loc.loc_id
            JOIN business_unit bu ON e.bu_id = bu.bu_id
            WHERE d.device_id = ?;
            `, [id], (err, results) => {
        if (err) {
            res.status(500).send  
        }
  
        if (results.length === 0) {
          return res.status(404).json({ message: 'Device not found' });
        }
    
        res.status(200).json(results);
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
