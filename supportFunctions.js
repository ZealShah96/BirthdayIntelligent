var sendmail=require('nodemailer');
var transport=require('./SendEmail');

var supportFunctions={};

supportFunctions.logging=function (message) {
    console.log(message);
}

supportFunctions.loggingVaribleWithName=function(variable){

}

supportFunctions.sendMail=function(date,daysbeforeitsend){
    supportFunctions.logging("Mail sending process will start in moments..."); 
  var mailOptions = {
    from: 'zealshah96@gmail.com',
    to: 'zealshah96@gmail.com',
    subject: 'This is reminder for there is birthday on this date'+date,
    text: 'i am informing you before :' + daysbeforeitsend+' days.'
  };
    
    transport.transporter(mailOptions,function(statusCode,string){
        supportFunctions.logging("Email text"+mailOptions.text);
        supportFunctions.logging("Is request Complete"+statusCode);
        supportFunctions.logging("Email Sent"+string);
        supportFunctions.logging("Mail sent...");

    });
    
}

supportFunctions.logging("Console Logging is working properly....");

supportFunctions.findDatedifference=function (startDate,endDate) {
    var date1 = new Date(startDate);
    var date2 = new Date(endDate);
    var timeDiff = Math.abs(date2.getTime() - date1.getTime());
    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return diffDays;
}

supportFunctions.readFile=function (pathFile,callback) {

}


supportFunctions.findTimeBetween2Time = function (starttime, endtime) {
    var diffBetweenTime = Math.ceil((endtime.getTime() - starttime.getTime()) / (1000));
   supportFunctions.logging("Time taken"+diffBetweenTime);
   return endtime;
}

module.exports=supportFunctions;