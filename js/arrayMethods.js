
var  shows=["lucifer","the boys","daredevil","loki",
"moon knight"];

const movies=["iron man","thor","captain america","hulk","avengers"];

//  method-1:concat
console.log("CONCAT 2 ARRAYS",shows.concat(movies));

//method2:includes

console.log("INCLUDES METHPOD CHECK FOR ELEMENT",shows.includes("the boys"));

//method3:push (appends the element)

console.log("CHECKS THE PUSH METHOD IT RETURNS NEW SIZE OF ARRAY",shows.push("she hulk"));


// console.log("orignal array is ",shows);

//method 4:unshift append at start of list

console.log("UNSHIFT METHOD APPENDS NEW ITEM AT BEGINING IT RETURNS",shows.unshift("hawkseye"));

console.log("new array is ",shows);


//METHOD 5 :POP REMOVES FROM LAST AND RETURNS

console.log("last element using POP method is",shows.pop());

console.log("new array is ",shows);



//METHOD-5 :SHIFT METHOD REMOVES THE FIRST ELEMENT AND RETURNS interval

console.log("first element using shift method is",shows.shift());

console.log("new array is ",shows);


//METHOD-6:SORT METHOD SORTS NUMERIC IN ASCENDING AND ALPHABETICALY IN STRING arrayMethods

console.log("SORTING ELEMENTS IN ASCENDING ORDER",shows.sort());


//METHOD -7:SLICE method


resetData();

console.log("FETCHING ELEMENTS FROM INDEX 1 TO 3 ",shows.slice(1,4));

// resetData();

console.log("FETCHING ELEMENTS USING NEGATIVE INDEX",shows.slice(-2,-5));


//METHOD-8: SPLICE method

console.log("JOIN METHOD DEMO");


console.log("ORIGNAL ARRAY IS ",shows);


console.log("AFTER USING JOIN",shows.join("-"));



function resetData(){


    shows=["lucifer","the boys","daredevil","loki",
    "moon knight"];


}
