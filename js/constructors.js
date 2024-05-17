console.log("welcome to lession of constructor");


function createUser(name,profession){

    this.name=name;
    this.profession=profession;
    this.details=()=>{

        return `name:${this.name}\nprofession:${this.profession}`

    }

}



const u1 = new createUser("akash","designer");


console.log(u1.details());


function FictionalChar(name,universe,rating){

    this.name=name;
    this.universe=universe;
    this.rating=rating;

    this.info=()=>{

        return `name:${this.name}\nuniverse:${this.universe}\nrating:${this.rating}`

    }

}


const deadpool=new FictionalChar("deadpool","MARVEL",9);

const xenomorph = new FictionalChar("xenomorph","Aliens",10);

console.log(deadpool);

console.log(xenomorph);


console.log(deadpool.info());

console.log(xenomorph.info());