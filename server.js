require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: "k.jagadeesh9949@gmail.com", pass: "oiapivduuitxghxz"  } // k.jagadeesh9949@gmail.com oiapivduuitxghxz 
});

app.post("/send-email", async (req, res) => {

    try {
        const { name, email, date, time, department} = req.body;
        await transporter.sendMail({
            from: "k.jagadeesh9949@gmail.com",
            to: email,
            subject: "Appointment Confirmed",
            html: `<h3>Hello ${name},</h3>
            <p>Thankyou For Choosing Us</p>
            <p>Your appointment is booked for ${date} at ${time}.
            <p>Your appointment department is ${department}</p>
            <p>HAVE  A  GREAT DAY </p>
            <p>JK HOSPITAL</p>
            <img src='cid:hospital width='200px'>`,
            attachments: [{
                filename : 'hospital.jpeg',
                path : "https://i.ibb.co/0yMBzW4M/img10.jpg",
                cid : 'hospital'
             }   
            ]
        });
        res.json({ success: true });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
});

app.listen(5000, () => console.log("Server running on port 5000"));

/*
require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json()); // Parse JSON data


// Nodemailer email configuration
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: "k.jagadeesh9949@gmail.com", pass: "oiapivduuitxghxz" } // k.jagadeesh9949@gmail.com oiapivduuitxghxz
});

// API endpoint to receive appointment data
app.post("/send-email", async (req, res) => {
    try {
        const { name, email, date, department, count} = req.body;
        
        await transporter.sendMail({
            from: 'k.jagadeesh9949@gmail.com',
            to: email,
            subject: "Appointment Confirmed",
            html: `<h3>Hello ${name},</h3>
            <p>Thankyou For Choosing Us</p>
            <p>Your appointment is booked on ${date} for ${department}.
            <p>Your appointment Token Number is ${count}</p>
            <p>HAVE  A  GREAT DAY </p>
            <p>JK HOSPITAL</p>
            <img src='cid:hospital width='200px'>`,
            attachments: [{
                filename : 'hospital.jpeg',
                path : "https://i.ibb.co/0yMBzW4M/img10.jpg",
                cid : 'hospital'
             }   
            ]

        });

        res.json({ success: true, message: "Email sent successfully!" });
        name.vale = ""
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
});

// Start server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
*/
