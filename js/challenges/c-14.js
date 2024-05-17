
function showCallFunction(callback){

    callback(10);

}

showCallFunction(function (value){console.log("value is ",value);});
