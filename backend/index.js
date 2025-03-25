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

app.get('/device', (req, res) => {
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

app.get('/device/:id', (req, res) => {
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
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
