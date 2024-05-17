
const user={

    "name":"akashdeep",
    "role":"web developer",
    "email":"akashdeep@gmail.com",
    "proUser":true,
    "courses":["c language","c++ language","html","css","javascript"],
    "address":{
        "city":"jalandhar",
        "postalCode":144001
    }};

console.log("user is ",user);

const jsonString=JSON.stringify(user);

console.log("user in json string  format is",jsonString);
console.clear();
console.log("user in json string  format is",jsonString);
console.log("now we will convert json string to object");

const parsedObject =JSON.parse(jsonString);

console.log(parsedObject);
