console.log("welcome to oops challenge");


const person={

    name:"akash",
    age:31,
    greetRegular:function(){
       return  `Hello my name is ${this.name} & I am ${this.age} years old`;
    },
    greetArrow:()=> `Hello my name is ${this.name} & I am ${this.age} years old`
}


console.log(person.greetRegular());

console.log(person.greetArrow());