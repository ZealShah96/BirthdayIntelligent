var fs=require("fs");
var schedule=require("./schedular");
var config=require("./config");


var readFile={};


readFile.read = function (dir, file, callback) {
    fs.readFile("./KeyAndDateJoin.json", 'utf8', function (err, data) {
        callback(err, data);
    });
};

readFile.read("","",function (err,data) {
    //console.log(data);    
if(err)
{
console.log("There is issue in fetching data.")
}
else{
    console.log("Everything is working properly we are going forward.");
//Stringy data for finding dates and interate in to it.
var dateData=JSON.parse(data);
    doloop(dateData, 1, Object.keys(dateData).length);
//schedule for specifc date is done
//console.log("Scheduler is done"+currentDate.getDate());

}
});

function doloop(dateData,currentIndex,maxLength){
    if(currentIndex<=maxLength){
    schedule.scheduleJobForHour(dateData[currentIndex].date);
currentIndex=currentIndex+1;
    doloop(dateData,currentIndex,maxLength);
    }
    else{
        return null;
    }
}


module.exports=readFile;