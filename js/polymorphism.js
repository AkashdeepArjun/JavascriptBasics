

class ProblemSolver{


    constructor(name){
        this.name=name;
    }


    logic=()=>"old fashioned methods does not alwys work";

}


class Developer extends ProblemSolver{

    constructor(name){
        super(name);
    }

    logic=()=> `woah ${this.name} can do many things as a developer`;

}


const genericProblemSolver = new ProblemSolver("aman");
const developer =new Developer("akash");
console.log(genericProblemSolver.logic());
console.log(developer.logic());


