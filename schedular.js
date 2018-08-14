var schedule=require('./node_modules/node-schedule');
var supportFunctions=require('./supportFunctions');
var finalDates=require('./findDates')
//var file=require();

var schedulefunctions={};

schedulefunctions.scheduleJobForHour=function(date){
    var birthday = new Date(date);
    var currentdate= new Date();
  //  var date = new Date(2018,08,10,21,08,0);
    
    var newDateWithAdded = currentdate.setMilliseconds(currentdate.getMilliseconds() + 40);
  console.log("Job scheduled for who has birthday on this date:"
       + birthday.toDateString() + "" + birthday.toTimeString()
        + "on this time" + currentdate); 
    schedule.scheduleJob(newDateWithAdded,function (callback) {
        finalDates.findDates(birthday.setFullYear(currentdate.getFullYear()+1));     
        birthday = supportFunctions.findTimeBetween2Time(birthday, currentdate);
    });
}
//testing purpose
//schedulefunctions.scheduleJobForHour();
module.exports=schedulefunctions;