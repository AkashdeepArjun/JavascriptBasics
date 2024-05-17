
const arr = [4, 5, 6,8];
console.log(arr.pop());


//override the logic of pop here 

Array.prototype.pop=()=>{

    return "lol overridden the array method";
}


//defining custom functions of class
String.prototype.sayHi=function(){

    return `hello ${this}`;
}



console.log(arr);


console.log("akash".sayHi());


function Developer(name){

    this.name=name;
}


function SoftwareEngineer(name,codeRating){

    this.codeRating=codeRating;
    this.name=name;

}


Developer.prototype.skills=function(){

    return `${this.name} is full stack developer`;

}


const engineer=new SoftwareEngineer("akash",1);
const developer = new Developer("akash")

console.log(engineer);

// console.log(engineer.skills());

console.log(developer);


