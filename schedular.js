var schedule=require('./node_modules/node-schedule');
var supportFunctions=require('./supportFunctions');
var finalDates=require('./findDates')
var file=require();

var schedulefunctions={};






schedulefunctions.scheduleJobForHour=function(){
    var birthday = new Date();
  //  var date = new Date(2018,08,10,21,08,0);
    var newDateWithAdded = birthday.setMilliseconds(birthday.getMilliseconds() + 40);
    schedule.scheduleJob(newDateWithAdded,function (callback) {
        console.log("Job Started For for this date"+birthday.toDateString()+" "+birthday.toTimeString());
        finalDates.findDates();     
         var endDate=new Date();     
        birthday = supportFunctions.findTimeBetween2Time(birthday,endDate);
    });
}

schedulefunctions.scheduleJobForHour();
module.exports=schedulefunctions;