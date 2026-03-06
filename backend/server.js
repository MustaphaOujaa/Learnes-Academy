const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com', // بريدك هنا
    pass: 'your-app-password'    // الكود المكون من 16 حرف من جوجل
  }
});

app.post('/send-email', (req, res) => {
  const mailOptions = {
    from: req.body.email,
    to: 'your-email@gmail.com', // بريدك لاستلام الطلبات
    subject: `New Application: ${req.body.studentName}`,
    text: `Parent: ${req.body.parentName}\nPhone: ${req.body.phone}\nProgram: ${req.body.program}\nMessage: ${req.body.message}`
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) return res.status(500).send(err.toString());
    res.status(200).send('Success');
  });
});

app.listen(5000, () => console.log('Server is running on port 5000'));