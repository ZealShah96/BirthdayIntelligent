var supportFnctions=require('./supportFunctions');
let date = require('date-and-time');

var dateCalculationFunctions={};

var birthdayDate=date.parse("09-05-1996","DD-MM-YYYY");
supportFnctions.logging(birthdayDate);
//dateCalculationFunctions



module.exports=dateCalculationFunctions;