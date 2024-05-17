let money='50';

console.log(money);

console.log("type of variable is ",typeof(money));

//convert string to number

// money=parseInt(money);
//
// console.log("type of variable is ",typeof(money));

//lets try to convert manual way

console.log("type of variable is ",typeof(money));

money=Number(money);

console.log("type of variable is (coverted via number constructor)",typeof(money));

//number to string
// money=money.toString(); WAY1

money=String(money);
console.log("type of variable is ",typeof(money));


//string to decimal
console.log("string to decimal");
money="50.0242";
console.log(" orignal type of variable is ",typeof(money));
money=parseFloat(money);
console.log(" modified type of variable is ",typeof(money));
