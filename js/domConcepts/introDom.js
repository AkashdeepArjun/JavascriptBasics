// console.dir(document.head);
//
//
// console.log(`title is ${document.title}`);

//GET ELEMENT BY getElementBYTag

console.log("getting element by tag name");
console.log(document.getElementsByTagName("body"));

console.log("getting element by id");
console.log(document.getElementById("maint"));

console.log(document.getElementById("id-1"));


console.log(document.getElementsByClassName("cls"));

console.log(document.getElementsByClassName("cls-1"));

// console.log(document.getElementsByClassName("cls-12"));
//
// console.log(document.getElementsByClassName("cls-15"));
// console.log("using query selector");
// console.log(document.querySelector('.cls'));

// console.log("using id in query selector");

console.log(document.querySelector('.cls'));

console.log(`using query selector all`);


console.log(document.querySelectorAll('.cls'));

console.log('using selector all on list items');


console.log(document.querySelectorAll('li').length);


console.log('storing element in variable');

let lists=document.querySelectorAll('li');

console.log(lists);
