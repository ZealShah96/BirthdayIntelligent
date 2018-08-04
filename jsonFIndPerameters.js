var jsonFindVariable={};

jsonFindVariable.findPerameter=function(contextwithdatarelatedtodb,callback){
context=this.findStringByDateAndName(contextwithdatarelatedtodb);
    var variable={};
variable.Name=contextwithdatarelatedtodb.perameter;
variable.Value=findValue(context,perameter);
callback(variable);
}

jsonFindVariable.findValue=function (context,perameter){

}

jsonFindVariable.findStringByDateAndName=function (context){
return ;
}


module.exports=jsonFindVariable;