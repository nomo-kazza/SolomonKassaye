const express = require('express');
const morgan = require('morgan');
const path = require('path');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();

// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.post('/contact-me', function (req, res) {
    console.log(req.body.name);
    console.log(req.body.email);

    // create reusable transporter object using SMTP transport
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'solomonjobsearch@gmail.com',
            pass: 'papisearch'
        }
    });

    // setup e-mail data with unicode symbols
    var mailOptions = {
        from: req.body.email,
        to: 'solomonjobsearch@gmail.com',
        subject: 'Hello Solomon',
        text: 'Hello world text',
        html: 'From : ' + req.body.name + '<br><br>' + 'Email : ' + req.body.email + '<br><br>' + req.body.message
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            return console.log(error);
        }
        console.log('Message sent: ' + info.response);
        res.json({'ok': true});
    });
});

// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});



module.exports = app;