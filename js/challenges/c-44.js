

class Hero{

    constructor(name,level){

        this.name=name;
        this.level=level;


    }

    greet=()=>{

        return `hello its me ${this.name} and i am at level ${this.level}`
    }


}

class Mega extends Hero{

    constructor(name,level,spell){

        super(name,level);
        this.spell=spell;

    }



}


const m = new Mega("potato",1,"getsuga tenso");

console.log(m);