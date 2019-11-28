'use strict';

var settings = require('../../settings.json');

exports.sendMail = function (subject, text, receiver) {
    const nodemailer = require('nodemailer');

    var transporter = nodemailer.createTransport({
        service: settings.service,
        auth: {
          user: settings.email_sender,
          pass: settings.email_sender_pass,
        }
      });

      var mailOptions = {
        from: settings.email_sender,
        to: receiver,
        subject: subject,
        text: text
      };

      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
}