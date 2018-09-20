var supportFunctions = require('./supportFunctions');
var nodemailer = require('nodemailer');


var transporterCollection={};


 var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'zealshah96@gmail.com',
      pass: 'your PassWord'
    }
  });


  transporterCollection.transporter=function (mailOptions,callback){

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            callback(error);
          } else {
            callback(200, info.response);

          }
      });
  }


  module.exports=transporterCollection;