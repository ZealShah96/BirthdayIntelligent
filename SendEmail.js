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
    supportFunctions.logging("Mail sending process will start in moments...");
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            callback(error);
          } else {
            callback(200, info.response);

supportFunctions.logging("Mail sent...");
          }
      });
  }


  module.exports=transporterCollection;