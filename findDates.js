var supportFnctions=require('./supportFunctions');
let date = require('date-and-time');


var dateCalculationFunctions={};
//var todayDate=new Date();

//var birthdayDate=date.parse("09-05-1996","DD-MM-YYYY");

//supportFnctions.logging(birthdayDate);
//supportFnctions.sendMail(birthdayDate,supportFnctions.findDatedifference(todayDate,birthdayDate));
//dateCalculationFunctions

dateCalculationFunctions.findDates=function(){
    var todayDate = new Date();

    var birthdayDate = date.parse("09-05-1996", "DD-MM-YYYY");

    supportFnctions.logging(birthdayDate);
    supportFnctions.sendMail(birthdayDate, supportFnctions.findDatedifference(birthdayDate,todayDate)); 
}

module.exports=dateCalculationFunctions;