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
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: req.body.email,
            subject: "Appointment Confirmed",
            html: `<h3>Hello ${req.body.name},</h3><p>Your appointment is booked on ${req.body.date} for ${req.body.department}.</p>`
        });
        res.json({ success: true });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
});

app.listen(5000, () => console.log("Server running on port 5000"));
