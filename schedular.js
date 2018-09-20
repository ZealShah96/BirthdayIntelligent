var schedule=require('./node_modules/node-schedule');
var supportFunctions=require('./supportFunctions');
var finalDates=require('./findDates')
//var file=require();

var schedulefunctions={};
//schedule function for specific date
schedulefunctions.scheduleJobForHour=function(date,scheduleDate){
    //intilize data
    var birthday = new Date(date);
  //current date
    var currentdate= new Date();
    //make it schedule date
   var newDateWithAdded= supportFunctions.birthDayPassedCurrentDay(birthday)
        ? birthday.setFullYear(currentdate.getFullYear() + 1)
       : birthday.setFullYear(currentdate.getFullYear());
 //   var newDateWithAdded = currentdate.setMilliseconds(currentdate.getMilliseconds() + 40);

//make string data for birthday and current date.
  var stringofdata="Job scheduled for who has birthday on this date:"
       + birthday.toDateString() + "" + birthday.toTimeString()
      + "on this time" +
      Date(newDateWithAdded); 
    
  //schedule date with time.  
        schedule.scheduleJob(newDateWithAdded,function (callback) {
            finalDates.findDates(newDateWithAdded,stringofdata);     
    
 

            birthday = supportFunctions.findTimeBetween2Time(birthday, currentdate);
    });
    console.log(schedule.Job.length);
    console.log(stringofdata);

    
}
//testing purpose
//schedulefunctions.scheduleJobForHour();
module.exports=schedulefunctions;