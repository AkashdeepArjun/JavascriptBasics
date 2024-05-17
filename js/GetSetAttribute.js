

console.log(`welcome akash`);


const a=document.querySelector('a');


console.log(`link given is ${a.href}`);


a.href="https://www.youtube.com";

console.log(`link is updated to ${a.href}`);


const field=document.querySelector(`input`);

console.log(`value on field is ${field.value}`);

// field.value="potato lol";
// field.type="password";
field.placeholder="bopdike password daaal";

console.log("type of field is :",field.getAttribute(`placeholder`));



//set getAttribute
field.setAttribute('placeholder','please fuckin login ');
