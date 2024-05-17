function Person(name,age,gender){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.info=()=>{
        
        return `name:${this.name}\nage:${this.age}\ngender:${this.gender}`;
    }
}



const p1 = new Person("akash",31,"male");
const p2 = new Person("ajay",30,"male");

console.log("name:",p1.name);
console.log("age:",p1.age);
console.log("gender:",p1.gender);



console.log("name:",p2.name);
console.log("age:",p2.age);
console.log("gender:",p2.gender);


console.log(p1.info());
console.log(p2.info());
