var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '1@attendance.place',
    pass: 'manuallydoingattendanceisbad'
  }
});

var mailOptions = {
  from: '1@attendance.place',
  to: '***REMOVED***',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});