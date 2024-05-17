const person={
name:"akashdeep",
profession:"programmer and UI/UX designer",
married:false


}

console.log(person.name);

//altertnative way

console.log(person['name']);


//lets try to create new property
person.codeChefRating=1;

console.log(person.codeChefRating);

console.log("modified object",person);

delete person.married;

console.log("final object is ",person);
