
function addEventListener(callback){

    callback("event added");

}



addEventListener(function(value){

console.log("message is",value);

});
