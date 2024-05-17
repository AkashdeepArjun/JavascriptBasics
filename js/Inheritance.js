

//ES5 style of making classes 

function Engineer(name){
    this.name=name;
}


function MechanicalEngineer(name)
{

    Engineer.call(this,name);


}
// using lambda expressions wont give access to its members here 
Engineer.prototype.solveProblem=function(problemType){


        return `yo ${this.name} is good in solving ${problemType} problems`   
} 

MechanicalEngineer.prototype=Object.create(Engineer.prototype);


const er= new Engineer("akash");

const er2= new MechanicalEngineer("sachin");

console.log(er.solveProblem("UI/UX designing"));

console.log(er2.solveProblem("Solve Vehicle Problems"));

console.log(er2);



console.log(`lets write ES6 code of inheritance`);



class ProgrammigLanguage{

    constructor(name){
        this.name=name;
    }


    getDsa=()=>{
        throw new Error(" lol no data structure is supported in old ass language");
    }

}


class L extends ProgrammigLanguage{

    constructor(name){
        super(name);
    }

    getDsa=()=>`the language ${this.name} supports array linkedlist stack queue`;

}

const clan = new L("C Language");

try{

    const potato = new ProgrammigLanguage("go");
    console.log(potato.getDsa());
}catch(exception){
    console.log(exception.message);
}

console.log(clan);