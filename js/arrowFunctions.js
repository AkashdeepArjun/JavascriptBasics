

//traditiona way

function greetUser(username){
    return `hello ${username}`;
}

console.log("traditional method output is",greetUser("Akashdeep Wadhwa"));


// functions as arrow way
//NOTE :single parameter we can omit braces
welcome =usernames=>{
    return `hello buahaha  ${usernames}`;
}

console.log("arrow notation method call output is ",welcome("Akashdeep wadhwa"));


greeting=(username,profession)=>{

    return `hi mr ${username} its good to see someone who is ${profession} by profession`;
}

console.log("arrow notation 2 params way output is \n",greeting("Akash","Engineer"));

// if we dont have any parameter

sayHello=()=>{
    return "hello mr akash";
}

console.log("without params output is ",sayHello());


//lets make our  code more tiny

//case :if you have only single line of return

sayHi=name=>`hiiiii mr ${name}`;

console.log("shorthand notation function is\n",sayHi("akashdeep"));


//lets see this in one more example


const doub=(amt)=>amt*2;

console.log("doubling amount 2 that is ",doub(2));
