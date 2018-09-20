var sendmail=require('nodemailer');
var transport=require('./SendEmail');

var supportFunctions={};

supportFunctions.logging=function (message) {
    console.log(message);
}

supportFunctions.loggingVaribleWithName=function(variable){

}

supportFunctions.sendMail = function (date, daysbeforeitsend, stringofdata){
    supportFunctions.logging("Mail sending process will start in moments..."); 
  var mailOptions = {
    from: 'zealshah96@gmail.com',
    to: 'zealshah96@gmail.com',
    subject: stringofdata,
    text: 'i am informing you before :' + daysbeforeitsend+' days.'
  };
    
    transport.transporter(mailOptions,function(statusCode,string){
        supportFunctions.logging("Email Submject" + mailOptions.subject);
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
    // if(supportFunctions.birthDayPassedCurrentDay(startDate,endDate)){
    //     diffDays=diffDays-365;
    // }
    return diffDays;
}

supportFunctions.readFile=function (pathFile,callback) {

}


supportFunctions.findTimeBetween2Time = function (starttime, endtime) {
    var diffBetweenTime = Math.ceil((endtime.getTime() - starttime.getTime()) / (1000));
 //  supportFunctions.logging("Time taken"+diffBetweenTime);
   return endtime;
}

supportFunctions.birthDayPassedCurrentDay=function(birthday){
var currentdate=new Date();
var birthdayDate=new Date(birthday);
var boolDatePassed=false;
if(birthdayDate.getMonth()<=currentdate.getMonth()){
    boolDatePassed = true;
}
else if (birthdayDate.getMonth() == currentdate.getMonth()){
    if (birthdayDate.getDay()<currentdate.getDay()) {
        boolDatePassed = true;
    }
}
return boolDatePassed;
}


module.exports=supportFunctions;
