var sendmail=require('nodemailer');
var transport=require('./SendEmail');

var supportFunctions={};

supportFunctions.logging=function (message) {
    console.log(message);
}

supportFunctions.loggingVaribleWithName=function(variable){

}

supportFunctions.sendMail=function(){
   
  var mailOptions = {
    from: 'zealshah96@gmail.com',
    to: 'zealshah96@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };
    
    transport.transporter(mailOptions,function(statusCode,string){
        supportFunctions.logging("Is request Complete"+statusCode);
        supportFunctions.logging("Email Sent"+string);
    });
    
}




supportFunctions.logging("Console Logging is working properly....");




module.exports=supportFunctions;