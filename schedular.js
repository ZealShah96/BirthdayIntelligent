var schedule=require('./node_modules/node-cron');
var supportFunctions=require('./supportFunctions');
var finalDates=require('./findDates');
var schedulefunctions={};

schedulefunctions.scheduleJobForHour=function(){
    var newdate = new Date();
    schedule.schedule('*/10 * * * * *',function (callback) {
     
        console.log("Zeal Shah");
        finalDates.findDates();
        var endDate=new Date();
     
       
        newdate = supportFunctions.findTimeBetween2Time(newdate,endDate);
      
    });

}

schedulefunctions.scheduleJobForHour();
module.exports=schedulefunctions;